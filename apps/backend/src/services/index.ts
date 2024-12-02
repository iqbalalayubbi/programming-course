import { PrismaClient } from '@prisma/client';
import { AuthService } from './authService';
import { JwtService } from './jwtService';
import { UserService } from './userService';
import { PasswordService } from './passwordService';
import { MailerService } from './mailerService';
import { OtpService } from './otpService';

const prismaClient = new PrismaClient();
const jwtService = new JwtService();
const userService = new UserService({ prismaClient });
const passwordService = new PasswordService();
const mailerService = new MailerService();
const otpService = new OtpService({ prismaClient });

const authService = new AuthService({
  userService,
  jwtService,
  mailerService,
  passwordService,
  otpService,
});

export { authService };
export * from './types';
