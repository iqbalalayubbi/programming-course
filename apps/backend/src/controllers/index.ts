import { AuthController } from './authController';
import { authService } from '@/services';

const authController = new AuthController(authService);

export { authController };
