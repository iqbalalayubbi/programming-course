import { challengeController } from '@/controllers';
import express from 'express';

const router = express.Router();

router.post('/', challengeController.createChallenge);

export { router };
