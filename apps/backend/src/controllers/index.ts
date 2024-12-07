import { authService, courseContentService, courseService } from '@/services';
import { AuthController } from './authController';
import { SkillController } from './skillController';
import { UserSkillController } from './userSkillController';
import { CourseController } from './courseController';
import { CourseContentController } from './courseContentController';

const skillController = new SkillController();
const userSkillController = new UserSkillController();
const authController = new AuthController(authService);
const courseController = new CourseController({ courseService });
const courseContentController = new CourseContentController({
  courseContentService,
});

export {
  authController,
  skillController,
  userSkillController,
  courseController,
  courseContentController,
};
