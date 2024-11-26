import Joi, { ObjectSchema } from 'joi';

const registerSchema: ObjectSchema = Joi.object({
  username: Joi.string().min(6).required(),
  email: Joi.string().email().required(),
  password: Joi.string().min(8).required(),
  role: Joi.string().valid('student', 'mentor').required(),
});

export { registerSchema };
