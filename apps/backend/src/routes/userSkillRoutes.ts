import { userSkillController } from '@/controllers';
import { validate } from '@/middlewares';
import {
  createUserSkillSchema,
  deleteUserSkillsSchema,
  getUserSkillSchema,
} from '@/validations';
import express from 'express';

const router = express.Router();

router.post(
  '/',
  validate(createUserSkillSchema),
  userSkillController.createUserSkill,
);

router.get(
  '/',
  validate(getUserSkillSchema),
  userSkillController.getUserSkills,
);

router.delete(
  '/',
  validate(deleteUserSkillsSchema),
  userSkillController.deleteUserSkills,
);

export { router };
