import { PrismaClient } from '@prisma/client';
import { AuthService } from './authService';
import { JwtService } from './jwtService';
import { UserService } from './userService';
import { PasswordService } from './passwordService';
import { MailerService } from './mailerService';
import { OtpService } from './otpService';
import { SkillService } from './skillService';
import { UserSkillService } from './userSkillService';
import { CourseService } from './courseService';
import { CourseContentService } from './courseContentService';
import { StudentCourseService } from './studentCourseService';
import { DashboardService } from './dashboardService';
import { MulterService } from './MulterService';
import { directoryName } from '@/enums';
import { NoteService } from './noteService';

const prismaClient = new PrismaClient();
const jwtService = new JwtService();
const userService = new UserService({ prismaClient });
const passwordService = new PasswordService();
const mailerService = new MailerService();
const otpService = new OtpService({ prismaClient });
const courseService = new CourseService({ prismaClient });
const courseContentService = new CourseContentService({ prismaClient });
const skillService = new SkillService({ prismaClient });
const userSkillService = new UserSkillService({ prismaClient });
const studentCourseService = new StudentCourseService({ prismaClient });
const dashboardService = new DashboardService({
  prismaClient,
  studentCourseService,
});
const multerPhotoService = new MulterService(directoryName.PHOTOS);
const multerVideoService = new MulterService(directoryName.VIDEOS);
const authService = new AuthService({
  userService,
  jwtService,
  mailerService,
  passwordService,
  otpService,
});
const noteService = new NoteService({ prismaClient });

export {
  authService,
  skillService,
  userSkillService,
  courseService,
  jwtService,
  courseContentService,
  studentCourseService,
  userService,
  dashboardService,
  multerPhotoService,
  multerVideoService,
  noteService,
};
export * from './types';
