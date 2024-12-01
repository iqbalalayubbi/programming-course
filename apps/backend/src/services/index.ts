import { PrismaClient } from '@prisma/client';
import { AuthService } from './authService';
import { JwtService } from './jwtService';
import { UserService } from './userService';
import { PasswordService } from './passwordService';
import { MailerService } from './mailerService';

const prismaClient = new PrismaClient();
const jwtService = new JwtService();
const userService = new UserService({ prismaClient });
const passwordService = new PasswordService();
const mailerService = new MailerService();

const authService = new AuthService({
  prismaClient,
  jwtService,
  userService,
  passwordService,
  mailerService,
});

export { authService };
export * from './types';
