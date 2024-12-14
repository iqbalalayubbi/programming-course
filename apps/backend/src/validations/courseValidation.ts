import Joi, { ObjectSchema } from 'joi';

const createCourseSchema: ObjectSchema = Joi.object({
  mentor_username: Joi.string().required(),
  title: Joi.string().required(),
  description: Joi.string().required(),
  star_total: Joi.number().integer().default(0),
  is_certificate_exist: Joi.boolean().default(false),
  thumbnail_url: Joi.string().uri(),
});

const updateCourseSchema: ObjectSchema = Joi.object({
  title: Joi.string(),
  description: Joi.string(),
  star_total: Joi.number().integer(),
  is_certificate_exist: Joi.boolean(),
  thumbnail_url: Joi.string().uri(),
});

export { createCourseSchema, updateCourseSchema };
