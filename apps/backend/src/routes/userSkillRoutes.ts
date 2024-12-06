import { userSkillController } from '@/controllers';
import { validate } from '@/middlewares';
import { createUserSkillSchema } from '@/validations';
import express from 'express';

const router = express.Router();

router.post(
  '/',
  validate(createUserSkillSchema),
  userSkillController.createUserSkill,
);

export { router };
