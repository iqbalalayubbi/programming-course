import { challengeSubmissionController } from '@/controllers';
import express from 'express';

const router = express.Router();

router.post('/', challengeSubmissionController.createChallengeSubmission);
router.get('/', challengeSubmissionController.getAllChallenges);

export { router };
