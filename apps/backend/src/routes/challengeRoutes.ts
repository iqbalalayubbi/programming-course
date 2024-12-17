import { challengeController } from '@/controllers';
import express from 'express';

const router = express.Router();

router.post('/', challengeController.createChallenge);
router.get('/', challengeController.getAllChallenges);
router.get('/:id', challengeController.getChallengeById);

export { router };
