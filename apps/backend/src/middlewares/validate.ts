import { Request, Response, NextFunction } from 'express';
import { ObjectSchema } from 'joi';

const validate = (
  schema: ObjectSchema,
): ((req: Request, res: Response, next: NextFunction) => void) => {
  return (req: Request, res: Response, next: NextFunction) => {
    const { error } = schema.validate(req.body);
    if (error) {
      return res.status(400).json({
        error: error.details.map((detail) => ({
          field: detail.path[0],
          message: detail.message,
        })),
      });
    }
    next();
  };
};

export { validate };
