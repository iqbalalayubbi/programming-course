import { formatResponse } from '@/utils';
import { statusCode } from 'common';
import { Request, Response, NextFunction } from 'express';
import { ObjectSchema } from 'joi';

const validate = (
  schema: ObjectSchema,
): ((req: Request, res: Response, next: NextFunction) => void) => {
  return (req: Request, res: Response, next: NextFunction) => {
    console.log(req.body);
    const { error } = schema.validate(req.body);
    if (error) {
      const errors = error.details.map((detail) => ({
        field: detail.path[0] as string,
        message: detail.message,
      }));

      return formatResponse({
        res,
        message: 'validation error',
        statusCode: statusCode.BAD_REQUEST,
        errors,
      });
    }
    next();
  };
};

export { validate };
