import Joi, { ObjectSchema } from 'joi';

const createUserSkillSchema: ObjectSchema = Joi.object({
  skillId: Joi.number().integer().strict().required(),
  userId: Joi.number().integer().strict().required(),
});

export { createUserSkillSchema };
