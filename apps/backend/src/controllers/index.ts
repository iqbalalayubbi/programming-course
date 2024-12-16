import {
  authService,
  courseContentService,
  courseService,
  dashboardService,
  noteService,
  userService,
} from '@/services';
import { AuthController } from './authController';
import { SkillController } from './skillController';
import { UserSkillController } from './userSkillController';
import { CourseController } from './courseController';
import { CourseContentController } from './courseContentController';
import { StudentCourseController } from './studentCourseController';
import { ProfileController } from './profileController';
import { DashboarController } from './dashboardController';
import { UploadController } from './uploadController';
import { NoteController } from './noteController';

const skillController = new SkillController();
const userSkillController = new UserSkillController();
const authController = new AuthController(authService);
const courseController = new CourseController({ courseService });
const courseContentController = new CourseContentController({
  courseContentService,
});
const studentCourseController = new StudentCourseController();
const profileController = new ProfileController({ userService });
const dashboardController = new DashboarController({ dashboardService });
const uploadController = new UploadController({
  userService,
  courseService,
  courseContentService,
});
const noteController = new NoteController({ noteService });

export {
  authController,
  skillController,
  userSkillController,
  courseController,
  courseContentController,
  studentCourseController,
  profileController,
  dashboardController,
  uploadController,
  noteController,
};
