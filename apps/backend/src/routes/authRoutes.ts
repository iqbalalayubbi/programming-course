import { AuthController } from '@/controllers';
import { validate } from '@/middlewares';
import { registerSchema } from '@/validations';
import express, { Request, Response } from 'express';

const router = express.Router();
const authController = new AuthController();

router.post('/register', validate(registerSchema), authController.register);

router.get('/verify-email/:token', authController.verifyEmail);

router.post('/login', (req: Request, res: Response) => {
  // data
  // identifier (username or email), password
  res.send('login path API');
});

router.post('forgot-password', (req: Request, res) => {
  // data
  // identifier (username or email)
  res.send('forgot password path API');
});

router.post('/reset-password', (req: Request, res: Response) => {
  // data
  // otp, password
  res.send('reset password path API');
});

router.get('verify-user', (req: Request, res: Response) => {
  // no data
  res.send('verify user');
});

router.post('/logout', (req: Request, res: Response) => {
  // no data
  res.send('logout path API');
});

export { router };
