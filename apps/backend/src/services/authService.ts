import { UserModel } from '@/models';
import { PrismaClient } from '@prisma/client';
import { UserService } from './userService';
import { JwtService } from './jwtService';
import { AuthServiceType } from './types';
import { MailerService } from './mailerService';
import { PasswordService } from './passwordService';

type Constructor = {
  prismaClient: PrismaClient;
  userService: UserService;
  jwtService: JwtService;
  mailerService: MailerService;
  passwordService: PasswordService;
};

type RegisterResponse = {
  isSuccess: boolean;
  error?: { field: 'email' | 'username'; message: string };
  data?: UserModel;
};

class AuthService implements AuthServiceType {
  private userService: UserService;
  private jwtService: JwtService;
  private mailerService: MailerService;
  private passwordService: PasswordService;

  public constructor({
    userService,
    jwtService,
    mailerService,
    passwordService,
  }: Constructor) {
    this.userService = userService;
    this.jwtService = jwtService;
    this.mailerService = mailerService;
    this.passwordService = passwordService;
  }

  async isEmailExist(email: string): Promise<boolean> {
    const user = await this.userService.find({
      key: 'email',
      value: email,
    });

    return !!user;
  }

  async isUsernameExist(username: string): Promise<boolean> {
    const user = await this.userService.find({
      key: 'username',
      value: username,
    });

    return !!user;
  }

  async isDuplicateRole(email: string, role: string): Promise<boolean> {
    const user = await this.userService.find({
      key: 'email',
      value: email,
    });

    if (user && user.role === role) {
      return true;
    }

    return false;
  }

  async register(user: UserModel): Promise<RegisterResponse> {
    const { email, username, role, password } = user;

    const hasUsername = await this.isUsernameExist(username);

    if (hasUsername) {
      return {
        isSuccess: false,
        error: {
          field: 'username',
          message: 'Username already exists',
        },
      };
    }

    const hasDuplicateRole = await this.isDuplicateRole(email, role);

    if (hasDuplicateRole) {
      return {
        isSuccess: false,
        error: {
          field: 'email',
          message: 'Email already registered with the same role',
        },
      };
    }

    const accessToken = this.jwtService.generateAccessToken(username, role);
    const hashPassword = await this.passwordService.hashPassword(password);
    const newUser: UserModel = { ...user, password: hashPassword };

    const createdUser = await this.userService.create(newUser);

    // send email verification
    const callbackUrl = `http://localhost:8000/auth/verify-email/${accessToken}`;
    const subject = 'Verify your email';
    const html = `Click the link below to verify your email: <a href="${callbackUrl}">Click Here</a>`;

    await this.mailerService.sendEmail({ recipient: email, subject, html });

    return {
      isSuccess: true,
      data: createdUser,
    };
  }
}

export { AuthService };
