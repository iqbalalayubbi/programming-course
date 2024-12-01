import { Request, Response } from 'express';
import { PrismaClient } from '@prisma/client';
import { formatResponse, hashPassword, verifyToken } from '@/utils';
import { StatusCode } from 'common';
import dayjs from 'dayjs';
import { AuthServiceType } from '@/services';

const prisma = new PrismaClient();

declare module 'express-session' {
  export interface SessionData {
    token: string | null;
  }
}

class AuthController {
  private authService: AuthServiceType;

  public constructor(authService: AuthServiceType) {
    this.authService = authService;
  }

  async register(req: Request, res: Response) {
    //! rules: user can create multiple role in one account
    const { isSuccess, error } = await this.authService.register(req.body);

    if (isSuccess) {
      return formatResponse({
        res,
        statusCode: StatusCode.CREATED,
        message: 'Email verify already sent successfully',
      });
    }

    if (error) {
      return formatResponse({
        res,
        statusCode: StatusCode.BAD_REQUEST,
        message: error.message,
        errors: [
          {
            field: error.field,
            message: error.message,
          },
        ],
      });
    }

    return {
      res,
      statusCode: StatusCode.UNAUTHORIZED,
      message: 'Invalid credentials',
    };
  }

  async verifyEmail(req: Request, res: Response) {
    const { token } = req.params;
    const { isSuccess, error } = await this.authService.verifyEmail(token);

    if (isSuccess) {
      return formatResponse({
        res,
        statusCode: StatusCode.OK,
        message: 'Email verified successfully',
      });
    }

    if (error) {
      return formatResponse({
        res,
        statusCode: StatusCode.UNAUTHORIZED,
        message: error.message,
        errors: [
          {
            field: error.field,
            message: error.message,
          },
        ],
      });
    }

    return {
      res,
      statusCode: StatusCode.INTERNAL_SERVER_ERROR,
      message: 'Failed to verify email',
    };
  }

  async login(req: Request, res: Response) {
    const { identifier, password } = req.body;

    const { isSuccess, error, data } = await this.authService.login(
      identifier,
      password,
    );

    if (isSuccess && data) {
      const { token } = data;
      req.session.token = token;

      return formatResponse({
        res,
        statusCode: StatusCode.OK,
        message: 'Login successful',
        data: { accessToken: token },
      });
    }

    if (error) {
      return formatResponse({
        res,
        statusCode: StatusCode.UNAUTHORIZED,
        message: error.message,
        errors: [
          {
            field: error.field,
            message: error.message,
          },
        ],
      });
    }

    return {
      res,
      statusCode: StatusCode.INTERNAL_SERVER_ERROR,
      message: 'Failed to login',
    };
  }

  async forgotPassword(req: Request, res: Response) {
    const { identifier } = req.body;
    const { isSuccess, error } =
      await this.authService.forgotPassword(identifier);

    if (isSuccess) {
      return formatResponse({
        res,
        statusCode: StatusCode.OK,
        message: 'Reset password email sent successfully',
      });
    }

    if (error) {
      return formatResponse({
        res,
        statusCode: StatusCode.BAD_REQUEST,
        message: error.message,
        errors: [
          {
            field: error.field,
            message: error.message,
          },
        ],
      });
    }

    return {
      res,
      statusCode: StatusCode.INTERNAL_SERVER_ERROR,
      message: 'Failed to send forgot password email',
    };
  }

  async resetPassword(req: Request, res: Response) {
    const { otp, password } = req.body;

    const userOTP = await prisma.oTP.findFirst({
      where: {
        otp_code: otp,
        expired_at: { gte: dayjs().toISOString() },
      },
    });

    if (!userOTP) {
      return formatResponse({
        res,
        statusCode: StatusCode.UNAUTHORIZED,
        message: 'Invalid or expired OTP',
        errors: [{ field: 'otp', message: 'Invalid or expired OTP' }],
      });
    }

    const user = await prisma.user.findFirst({
      where: { id: userOTP.user_id },
    });

    if (!user) {
      return formatResponse({
        res,
        statusCode: StatusCode.NOT_FOUND,
        message: 'User not found',
        errors: [{ field: 'user', message: 'User not found' }],
      });
    }

    user.password = await hashPassword(password);
    await prisma.user.update({ where: { id: user.id }, data: user });
    await prisma.oTP.delete({ where: { id: userOTP.id } });
    return formatResponse({
      res,
      statusCode: StatusCode.OK,
      message: 'Password reset successfully',
    });
  }

  async verifyUser(req: Request, res: Response) {
    const bearerToken = req.headers.authorization?.split(' ')[1];

    if (!bearerToken) {
      return formatResponse({
        res,
        statusCode: StatusCode.UNAUTHORIZED,
        message: 'No token provided',
        errors: [{ field: 'token', message: 'No token provided' }],
      });
    }

    const token = bearerToken;
    const decodedToken = verifyToken(token);

    if (!decodedToken) {
      return formatResponse({
        res,
        statusCode: StatusCode.UNAUTHORIZED,
        message: 'Invalid or expired token',
        errors: [{ field: 'token', message: 'Invalid or expired token' }],
      });
    }

    const user = await prisma.user.findFirst({
      where: { username: decodedToken.username },
    });

    if (!user) {
      return formatResponse({
        res,
        statusCode: StatusCode.NOT_FOUND,
        message: 'User not found',
        errors: [{ field: 'user', message: 'User not found' }],
      });
    }

    return formatResponse({
      res,
      statusCode: StatusCode.OK,
      message: 'User verified successfully',
      data: {
        user: {
          username: user.username,
          role: user.role,
        },
      },
    });
  }

  async logout(req: Request, res: Response) {
    if (req.session.token) {
      req.session.destroy((err) => {
        if (err) {
          return formatResponse({
            res,
            statusCode: StatusCode.INTERNAL_SERVER_ERROR,
            message: 'Error destroying session',
            errors: [{ field: 'session', message: 'Error destroying session' }],
          });
        }
      });
    }

    return formatResponse({
      res,
      statusCode: StatusCode.OK,
      message: 'Logged out successfully',
    });
  }
}

export { AuthController };
