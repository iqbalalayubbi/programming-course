import { PrismaClient } from '@prisma/client';
import { ServiceResponse } from './types';
import { ChallengeSubmissionModel } from '@/models';

type Constructor = {
  prismaClient: PrismaClient;
};

class ChallengeSubmissionService {
  private challengeSubmission: PrismaClient['challengeSubmission'];

  public constructor({ prismaClient }: Constructor) {
    this.challengeSubmission = prismaClient.challengeSubmission;
  }

  async create(data: ChallengeSubmissionModel): Promise<ServiceResponse> {
    try {
      const challengeSubmission = await this.challengeSubmission.create({
        data,
      });
      return {
        isSuccess: true,
        data: { challengeSubmission },
      };
    } catch {
      return {
        isSuccess: false,
        error: { field: 'challenge', message: 'Failed to create challenge' },
      };
    }
  }
}

export { ChallengeSubmissionService };
