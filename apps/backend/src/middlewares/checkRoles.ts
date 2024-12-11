import { jwtService } from '@/services';
import { statusCode } from 'common';
import { NextFunction, Request, Response } from 'express';

const checkRoles = (
  role: string,
): ((req: Request, res: Response, next: NextFunction) => void) => {
  return (req: Request, res: Response, next: NextFunction) => {
    // get token from user
    const bearerToken = req.headers.authorization?.split(' ')[1];

    if (!bearerToken) {
      return res
        .status(statusCode.UNAUTHORIZED)
        .json({ message: `Unauthorized` });
    }

    const { role: userRole } = jwtService.verifyToken(bearerToken);

    if (userRole !== role) {
      return res
        .status(statusCode.UNAUTHORIZED)
        .json({ message: `Your should be a ${role}` });
    }

    next();
  };
};

export { checkRoles };
