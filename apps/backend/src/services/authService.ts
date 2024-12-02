import { UserModel } from '@/models';
import { PrismaClient } from '@prisma/client';
import { UserService } from './userService';
import { JwtService } from './jwtService';
import { AuthServiceType } from './types';
import { MailerService } from './mailerService';
import { PasswordService } from './passwordService';
import { type ServiceResponse } from './types';
import { OtpService } from './otpService';
import dayjs from 'dayjs';

type Constructor = {
  prismaClient: PrismaClient;
  userService: UserService;
  jwtService: JwtService;
  mailerService: MailerService;
  passwordService: PasswordService;
  otpService: OtpService;
};

class AuthService implements AuthServiceType {
  private userService: UserService;
  private jwtService: JwtService;
  private mailerService: MailerService;
  private passwordService: PasswordService;
  private otpService: OtpService;

  public constructor({
    userService,
    jwtService,
    mailerService,
    passwordService,
    otpService,
  }: Constructor) {
    this.userService = userService;
    this.jwtService = jwtService;
    this.mailerService = mailerService;
    this.passwordService = passwordService;
    this.otpService = otpService;
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

  async forgotPassword(identifier: string): Promise<ServiceResponse> {
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

    const { otp_code } = await this.otpService.create(user.id);

    const subject = 'Reset Password';
    const html = `This is your OTP. it can be expire in 5 minute. <br>
                  <strong>${otp_code}</strong>
                  `;

    try {
      await this.mailerService.sendEmail({
        recipient: user.email,
        subject,
        html,
      });

      return {
        isSuccess: true,
        data: { user },
      };
    } catch {
      return {
        isSuccess: false,
        error: {
          field: 'email',
          message: 'Failed to send reset password email',
        },
      };
    }
  }

  async resetPassword(otp: string, password: string): Promise<ServiceResponse> {
    const currentTime = dayjs().toISOString();
    const userOTP = await this.otpService.verifyOtp(otp, currentTime);

    if (!userOTP) {
      return {
        isSuccess: false,
        error: { field: 'otp', message: 'Invalid or expired OTP' },
      };
    }

    const userId = userOTP.user_id;
    const user = await this.userService.find({ key: 'id', value: userId });

    if (!user) {
      return {
        isSuccess: false,
        error: { field: 'user', message: 'User not found' },
      };
    }

    user.password = await this.passwordService.hashPassword(password);
    await this.userService.update(userId, user);

    return {
      isSuccess: true,
      data: { user },
    };
  }

  async verifyUser(bearerToken: string | undefined): Promise<ServiceResponse> {
    if (!bearerToken) {
      return {
        isSuccess: false,
        error: { field: 'token', message: 'No token provided' },
      };
    }

    const decodedToken = this.jwtService.verifyToken(bearerToken);

    if (!decodedToken) {
      return {
        isSuccess: false,
        error: { field: 'token', message: 'Invalid or expired token' },
      };
    }

    const user = await this.userService.find({
      key: 'username',
      value: decodedToken.username,
    });

    if (!user) {
      return {
        isSuccess: false,
        error: { field: 'user', message: 'User not found' },
      };
    }

    return {
      isSuccess: true,
      data: { user },
    };
  }
}

export { AuthService };
