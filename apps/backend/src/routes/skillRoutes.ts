import { skillController } from '@/controllers';
import express from 'express';

const router = express.Router();

router.post('/', skillController.createSkill);
router.get('/', skillController.getSkills);
router.get('/:id', skillController.getSkillById);

export { router };
