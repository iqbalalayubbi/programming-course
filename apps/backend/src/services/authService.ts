import { UserModel } from '@/models';
import { PrismaClient } from '@prisma/client';
import { UserService } from './userService';
import { JwtService } from './jwtService';
import { AuthServiceType } from './types';
import { MailerService } from './mailerService';
import { PasswordService } from './passwordService';
import { type ServiceResponse } from './types';

type Constructor = {
  prismaClient: PrismaClient;
  userService: UserService;
  jwtService: JwtService;
  mailerService: MailerService;
  passwordService: PasswordService;
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

  async register(user: UserModel): Promise<ServiceResponse> {
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
      data: { user: createdUser },
    };
  }

  async verifyEmail(token: string): Promise<ServiceResponse> {
    const { isValid, username } = this.jwtService.verifyToken(token);

    if (!isValid) {
      return {
        isSuccess: false,
        error: {
          field: 'token',
          message: 'Invalid or expired token',
        },
      };
    }

    const user = await this.userService.find({
      key: 'username',
      value: username,
    });

    if (!user) {
      return {
        isSuccess: false,
        error: {
          field: 'user',
          message: 'User not found',
        },
      };
    }

    user.is_verified = true;
    await this.userService.update(user.id, user);

    return {
      isSuccess: true,
      data: { user },
    };
  }

  async login(identifier: string, password: string): Promise<ServiceResponse> {
    const user = await this.userService.findOr([
      { key: 'username', value: identifier },
      { key: 'email', value: identifier },
    ]);

    if (!user) {
      return {
        isSuccess: false,
        error: {
          field: 'user',
          message: 'User not found',
        },
      };
    }

    const isPasswordValid = await this.passwordService.verifyPassword(
      password,
      user.password,
    );

    if (!isPasswordValid) {
      return {
        isSuccess: false,
        error: {
          field: 'password',
          message: 'Invalid credentials',
        },
      };
    }

    const accessToken = this.jwtService.generateAccessToken(
      user.username,
      user.role,
    );

    return {
      isSuccess: true,
      data: {
        user,
        token: accessToken,
      },
    };
  }
}

export { AuthService };
