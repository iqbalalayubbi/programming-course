import Joi, { ObjectSchema } from 'joi';

const createUserSkillSchema: ObjectSchema = Joi.object({
  username: Joi.string().required(),
  skill: Joi.string().required(),
});

export { createUserSkillSchema };
