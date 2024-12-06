import Joi, { ObjectSchema } from 'joi';

const createUserSkillSchema: ObjectSchema = Joi.object({
  username: Joi.string().required(),
  skill: Joi.string().required(),
});

const getUserSkillSchema: ObjectSchema = Joi.object({
  username: Joi.string().required(),
});

const deleteUserSkillsSchema: ObjectSchema = Joi.object({
  ids: Joi.array().items(Joi.number().strict()).required(),
});

export { createUserSkillSchema, getUserSkillSchema, deleteUserSkillsSchema };
