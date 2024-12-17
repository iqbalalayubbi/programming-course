import { PrismaClient } from '@prisma/client';
import { ServiceResponse } from './types';
import { ChallengeModel } from '@/models';

type Constructor = {
  prismaClient: PrismaClient;
};

class ChallengeService {
  private challenge: PrismaClient['challenge'];

  public constructor({ prismaClient }: Constructor) {
    this.challenge = prismaClient.challenge;
  }

  async create(data: ChallengeModel): Promise<ServiceResponse> {
    try {
      const challenge = await this.challenge.create({ data });
      return {
        isSuccess: true,
        data: { challenge },
      };
    } catch {
      return {
        isSuccess: false,
        error: { field: 'challenge', message: 'Failed to create challenge' },
      };
    }
  }
}

export { ChallengeService };
