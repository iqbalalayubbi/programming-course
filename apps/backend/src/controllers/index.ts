import {
  authService,
  challengeService,
  courseContentService,
  courseService,
  dashboardService,
  noteService,
  userService,
  challengeSubmissionService,
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
import { ChallengeController } from './challengeController';
import { ChallengeSubmissionController } from './challengeSubmissionController';
import { UserController } from './userController';

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
const challengeController = new ChallengeController({ challengeService });
const challengeSubmissionController = new ChallengeSubmissionController({
  challengeSubmissionService,
});
const userController = new UserController({ userService });

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
  challengeController,
  challengeSubmissionController,
  userController,
};
