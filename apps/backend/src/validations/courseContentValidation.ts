import Joi, { ObjectSchema } from 'joi';

const createCourseContentSchema: ObjectSchema = Joi.object({
  course_id: Joi.number().integer().required(),
  page_id: Joi.number().integer().required(),
  content: Joi.string().required(),
  video_url: Joi.string().uri().required(),
});

export { createCourseContentSchema };
