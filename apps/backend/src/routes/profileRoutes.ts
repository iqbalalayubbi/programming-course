import { profileController } from '@/controllers';
import { validateToken } from '@/middlewares';
import express from 'express';

const router = express.Router();

router.get('/', validateToken(), profileController.getUserByUsername);
router.patch('/:id', validateToken(), profileController.updateUser);

export { router };
