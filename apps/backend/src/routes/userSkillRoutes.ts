import { userSkillController } from '@/controllers';
import express from 'express';

const router = express.Router();

router.post('/', userSkillController.createUserSkill);

export { router };
