import Joi from 'joi';

const updateStudentCourseValidation = Joi.object({
  is_finished: Joi.boolean(),
  certificate_url: Joi.string().uri(),
});

export { updateStudentCourseValidation };
