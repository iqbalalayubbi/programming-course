import Joi, { ObjectSchema } from 'joi';

const createCourseContentSchema: ObjectSchema = Joi.object({
  course_id: Joi.number().integer().required(),
  page: Joi.number().integer().required(),
  content: Joi.string().required(),
  video_url: Joi.string().uri().required(),
});

const updateCourseContentSchema: ObjectSchema = Joi.object({
  page: Joi.number().integer().strict().required(),
  content: Joi.string(),
  video_url: Joi.string().uri(),
});

export { createCourseContentSchema, updateCourseContentSchema };
