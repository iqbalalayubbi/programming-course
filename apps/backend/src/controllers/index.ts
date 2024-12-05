import { AuthController } from './authController';
import { SkillController } from './skillController';
import { authService } from '@/services';
import { UserSkillController } from './userSkillController';

const skillController = new SkillController();
const userSkillController = new UserSkillController();
const authController = new AuthController(authService);

export { authController, skillController, userSkillController };
