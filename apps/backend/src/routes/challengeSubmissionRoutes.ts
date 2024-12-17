import { challengeSubmissionController } from '@/controllers';
import express from 'express';

const router = express.Router();

router.post('/', challengeSubmissionController.createChallengeSubmission);

export { router };
