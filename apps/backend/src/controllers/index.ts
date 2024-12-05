import { AuthController } from './authController';
import { SkillController } from './skillController';
import { authService } from '@/services';

const skillController = new SkillController();
const authController = new AuthController(authService);

export { authController, skillController };
