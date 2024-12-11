import { Request, Response } from 'express';
import { formatResponse } from '@/utils';
import { statusCode } from 'common';
import { AuthServiceType } from '@/services';

declare module 'express-session' {
  export interface SessionData {
    token: string | null;
  }
}

class AuthController {
  private authService: AuthServiceType;

  public constructor(authService: AuthServiceType) {
    this.authService = authService;

    // binding all function
    this.login = this.login.bind(this);
    this.register = this.register.bind(this);
    this.verifyEmail = this.verifyEmail.bind(this);
    this.forgotPassword = this.forgotPassword.bind(this);
    this.resetPassword = this.resetPassword.bind(this);
    this.verifyUser = this.verifyUser.bind(this);
    this.logout = this.logout.bind(this);
  }

  public async register(req: Request, res: Response) {
    const { isSuccess, error } = await this.authService.register(req.body);

    if (isSuccess) {
      return formatResponse({
        res,
        statusCode: statusCode.CREATED,
        message: 'Email verify already sent successfully',
      });
    }

    if (error) {
      return formatResponse({
        res,
        statusCode: statusCode.BAD_REQUEST,
        message: error.message,
        errors: [
          {
            field: error.field,
            message: error.message,
          },
        ],
      });
    }

    return formatResponse({
      res,
      statusCode: statusCode.UNAUTHORIZED,
      message: 'Invalid credentials',
    });
  }

  public async verifyEmail(req: Request, res: Response) {
    const { token } = req.params;
    const { isSuccess, error } = await this.authService.verifyEmail(token);

    if (isSuccess) {
      return formatResponse({
        res,
        statusCode: statusCode.OK,
        message: 'Email verified successfully',
      });
    }

    if (error) {
      return formatResponse({
        res,
        statusCode: statusCode.UNAUTHORIZED,
        message: error.message,
        errors: [
          {
            field: error.field,
            message: error.message,
          },
        ],
      });
    }

    return formatResponse({
      res,
      statusCode: statusCode.INTERNAL_SERVER_ERROR,
      message: 'Failed to verify email',
    });
  }

  public async login(req: Request, res: Response) {
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
        statusCode: statusCode.OK,
        message: 'Login successful',
        data: { accessToken: token },
      });
    }

    if (error) {
      return formatResponse({
        res,
        statusCode: statusCode.UNAUTHORIZED,
        message: error.message,
        errors: [
          {
            field: error.field,
            message: error.message,
          },
        ],
      });
    }

    return formatResponse({
      res,
      statusCode: statusCode.INTERNAL_SERVER_ERROR,
      message: 'Failed to login',
    });
  }

  public async forgotPassword(req: Request, res: Response) {
    const { identifier } = req.body;
    const { isSuccess, error } =
      await this.authService.forgotPassword(identifier);

    if (isSuccess) {
      return formatResponse({
        res,
        statusCode: statusCode.OK,
        message: 'Reset password email sent successfully',
      });
    }

    if (error) {
      return formatResponse({
        res,
        statusCode: statusCode.BAD_REQUEST,
        message: error.message,
        errors: [
          {
            field: error.field,
            message: error.message,
          },
        ],
      });
    }

    return formatResponse({
      res,
      statusCode: statusCode.INTERNAL_SERVER_ERROR,
      message: 'Failed to send forgot password email',
    });
  }

  public async resetPassword(req: Request, res: Response) {
    const { otp, password } = req.body;

    const { isSuccess, error } = await this.authService.resetPassword(
      otp,
      password,
    );

    if (isSuccess) {
      return formatResponse({
        res,
        statusCode: statusCode.OK,
        message: 'Password reset successfully',
      });
    }

    if (error) {
      return formatResponse({
        res,
        statusCode: statusCode.UNAUTHORIZED,
        message: error.message,
        errors: [{ field: error.field, message: error.message }],
      });
    }

    return formatResponse({
      res,
      statusCode: statusCode.INTERNAL_SERVER_ERROR,
      message: 'Failed to reset password',
    });
  }

  public async verifyUser(req: Request, res: Response) {
    const bearerToken = req.headers.authorization?.split(' ')[1];

    const { isSuccess, error, data } =
      await this.authService.verifyUser(bearerToken);

    if (isSuccess) {
      return formatResponse({
        res,
        statusCode: statusCode.OK,
        message: 'User verified successfully',
        data,
      });
    }

    if (error) {
      return formatResponse({
        res,
        statusCode: statusCode.UNAUTHORIZED,
        message: error.message,
        errors: [{ field: error.field, message: error.message }],
      });
    }

    return formatResponse({
      res,
      statusCode: statusCode.INTERNAL_SERVER_ERROR,
      message: 'Failed to verify user',
    });
  }

  public async logout(req: Request, res: Response) {
    if (req.session.token) {
      req.session.destroy((err) => {
        if (err) {
          return formatResponse({
            res,
            statusCode: statusCode.INTERNAL_SERVER_ERROR,
            message: 'Error destroying session',
            errors: [{ field: 'session', message: 'Error destroying session' }],
          });
        }
      });
    }

    return formatResponse({
      res,
      statusCode: statusCode.OK,
      message: 'Logged out successfully',
    });
  }
}

export { AuthController };
