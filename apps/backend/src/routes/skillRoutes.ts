import { skillController } from '@/controllers';
import express from 'express';

const router = express.Router();

router.post('/', skillController.createSkill);

export { router };
