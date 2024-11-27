import { AuthController } from '@/controllers';
import { validate } from '@/middlewares';
import { registerSchema } from '@/validations';
import express, { Request, Response } from 'express';

const router = express.Router();

const authController = new AuthController();

router.post('/register', validate(registerSchema), authController.register);

router.get('/verify-email/:token', authController.verifyEmail);

router.post('/login', authController.login);

router.post('/forgot-password', authController.forgotPassword);

router.post('/reset-password', authController.resetPassword);

router.get('/verify-user', authController.verifyUser);

router.post('/logout', (req: Request, res: Response) => {
  // no data
  res.send('logout path API');
});

export { router };
