import { Request, Response } from 'express';
import { PrismaClient } from '@prisma/client';
import { formatResponse } from '@/utils';
import { StatusCode } from 'common';

const prisma = new PrismaClient();

class AuthController {
  async register(req: Request, res: Response) {
    //! rules: user can create multiple role in one account
    const { email, username, role } = req.body;

    const userEmail = await prisma.user.findFirst({ where: { email } });
    const hasUser = await prisma.user.findFirst({
      where: { username },
    });

    if (userEmail && userEmail.role === role) {
      return formatResponse({
        res,
        statusCode: StatusCode.CONFLICT,
        message: 'Email already registered',
        data: {},
      });
    }

    if (hasUser) {
      // TODO send verify email
      return formatResponse({
        res,
        statusCode: StatusCode.CONFLICT,
        message: 'Username already registered',
        data: {},
      });
    }

    await prisma.user.create({ data: req.body });

    // TODO send verify email
    return formatResponse({
      res,
      statusCode: StatusCode.CREATED,
      message: 'Email already sent',
      data: {},
    });
  }
}

export { AuthController };
