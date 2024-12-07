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
const authService = new AuthService({
  userService,
  jwtService,
  mailerService,
  passwordService,
  otpService,
});

export {
  authService,
  skillService,
  userSkillService,
  courseService,
  jwtService,
  courseContentService,
};
export * from './types';
