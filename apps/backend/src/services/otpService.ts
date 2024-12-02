import { OtpModel } from '@/models';
import { PrismaClient } from '@prisma/client';
import dayjs from 'dayjs';
import otpGenerator from 'otp-generator';

type Constructor = {
  prismaClient: PrismaClient;
};

class OtpService {
  private otpModel: PrismaClient['oTP'];
  private otpConfig;
  private maxLength;

  public constructor({ prismaClient }: Constructor) {
    this.otpModel = prismaClient.oTP;
    this.otpConfig = {
      upperCaseAlphabets: false,
      lowerCaseAlphabets: false,
      specialChars: false,
    };
    this.maxLength = 6;
  }

  async create(userId: number): Promise<OtpModel> {
    const otp = this.generateOTP(this.maxLength);
    const expirationTime = dayjs().add(5, 'minutes').toISOString(); // 5 minutes
    const otpCreated = await this.otpModel.create({
      data: { user_id: userId, otp_code: otp, expired_at: expirationTime },
    });

    return otpCreated;
  }

  private generateOTP(maxChar: number): string {
    const otp = otpGenerator.generate(maxChar, this.otpConfig);

    return otp;
  }

  async verifyOtp(
    otpCode: string,
    expiredAt: string,
  ): Promise<OtpModel | null> {
    const userOTP = await this.otpModel.findFirst({
      where: {
        otp_code: otpCode,
        expired_at: { gte: expiredAt },
      },
    });

    return userOTP;
  }
}

export { OtpService };
