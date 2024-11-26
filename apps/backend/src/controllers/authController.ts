import { Request, Response } from 'express';
import { PrismaClient } from '@prisma/client';
import {
  checkPassword,
  formatResponse,
  generateAccessToken,
  hashPassword,
  sendEmail,
  verifyToken,
} from '@/utils';
import { StatusCode } from 'common';

const prisma = new PrismaClient();

class AuthController {
  async register(req: Request, res: Response) {
    //! rules: user can create multiple role in one account
    const { email, username, password, role } = req.body;

    const userEmail = await prisma.user.findFirst({ where: { email } });
    const hasUser = await prisma.user.findFirst({
      where: { username },
    });

    if (userEmail && userEmail.role === role) {
      return formatResponse({
        res,
        statusCode: StatusCode.CONFLICT,
        message: 'Email already registered',
        errors: [
          {
            field: 'email',
            message: 'Email already registered',
          },
        ],
      });
    }

    if (hasUser) {
      // TODO send verify email
      return formatResponse({
        res,
        statusCode: StatusCode.CONFLICT,
        message: 'Username already registered',
        errors: [
          {
            field: 'username',
            message: 'Username already registered',
          },
        ],
      });
    }

    const user = {
      ...req.body,
      password: await hashPassword(password),
    };

    await prisma.user.create({ data: user });

    // generate access token
    const accessToken = generateAccessToken({ username, role });

    // TODO send verify email
    const callbackUrl = `http://localhost:8000/auth/verify-email/${accessToken}`;
    const subject = 'Verify your email';
    const html = `Click the link below to verify your email: <a href="${callbackUrl}">Click Here</a>`;

    try {
      await sendEmail({ recipient: email, subject, html });
    } catch (error) {
      console.log(error);
    }

    return formatResponse({
      res,
      statusCode: StatusCode.CREATED,
      message: 'Email verify already sent successfully',
    });
  }

  async verifyEmail(req: Request, res: Response) {
    const { token } = req.params;
    const isTokenValid = verifyToken(token);

    if (!isTokenValid) {
      return formatResponse({
        res,
        statusCode: StatusCode.UNAUTHORIZED,
        message: 'Invalid or expired token',
        errors: [
          {
            field: 'token',
            message: 'Invalid or expired token',
          },
        ],
      });
    }

    const { username } = isTokenValid;
    const user = await prisma.user.findFirst({
      where: { username },
    });

    if (!user) {
      return formatResponse({
        res,
        statusCode: StatusCode.NOT_FOUND,
        message: 'User not found',
        errors: [{ field: 'user', message: 'User not found' }],
      });
    }

    user.is_verified = true;
    await prisma.user.update({ where: { username }, data: user });
    return formatResponse({
      res,
      statusCode: StatusCode.OK,
      message: 'Email verified successfully',
    });
  }

  async login(req: Request, res: Response) {
    const { identifier, password } = req.body;

    const user = await prisma.user.findFirst({
      where: {
        OR: [{ username: identifier }, { email: identifier }],
      },
    });

    if (!user) {
      return formatResponse({
        res,
        statusCode: StatusCode.NOT_FOUND,
        message: 'User not found',
        errors: [{ field: 'identifier', message: 'User not found' }],
      });
    }

    const isPasswordValid = await checkPassword(password, user.password);

    if (!isPasswordValid) {
      return formatResponse({
        res,
        statusCode: StatusCode.UNAUTHORIZED,
        message: 'Invalid credentials',
        errors: [
          {
            field: 'password',
            message: 'Invalid credentials',
          },
        ],
      });
    }

    const accessToken = generateAccessToken({
      username: user.username,
      role: user.role,
    });

    return formatResponse({
      res,
      statusCode: StatusCode.OK,
      message: 'Login successful',
      data: { accessToken },
    });
  }
}

export { AuthController };
