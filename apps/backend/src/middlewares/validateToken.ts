import { jwtService } from '@/services';
import { formatResponse } from '@/utils';
import { statusCode } from 'common';
import { NextFunction, Request, Response } from 'express';

const validateToken = (): ((
  req: Request,
  res: Response,
  next: NextFunction,
) => void) => {
  return (req: Request, res: Response, next: NextFunction) => {
    const bearerToken = req.headers.authorization?.split(' ')[1];

    if (!bearerToken) {
      return formatResponse({
        res,
        statusCode: statusCode.UNAUTHORIZED,
        message: 'Token not provided',
      });
    }

    const { username, role } = jwtService.verifyToken(bearerToken);

    if (!username) {
      return formatResponse({
        res,
        statusCode: statusCode.UNAUTHORIZED,
        message: 'Invalid token',
      });
    }

    req.query.userData = { username, role };

    next();
  };
};

export { validateToken };
