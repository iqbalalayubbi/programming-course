import { authService, courseService } from '@/services';
import { AuthController } from './authController';
import { SkillController } from './skillController';
import { UserSkillController } from './userSkillController';
import { CourseController } from './courseController';

const skillController = new SkillController();
const userSkillController = new UserSkillController();
const authController = new AuthController(authService);
const courseController = new CourseController({ courseService });

export {
  authController,
  skillController,
  userSkillController,
  courseController,
};
