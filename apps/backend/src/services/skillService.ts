import { PrismaClient } from '@prisma/client';
import { prismaErrorCode } from '@/enums';
import { getPrismaError } from '@/utils';
import { ServiceResponse } from './types';

type Constructor = {
  prismaClient: PrismaClient;
};

class SkillService {
  private skillModel: PrismaClient['skill'];

  public constructor({ prismaClient }: Constructor) {
    this.skillModel = prismaClient.skill;
  }

  async create(name: string): Promise<ServiceResponse> {
    try {
      const skillCreated = await this.skillModel.create({ data: { name } });
      return {
        isSuccess: true,
        data: { skill: skillCreated },
      };
    } catch (error) {
      const errorCode = getPrismaError(error);
      if (errorCode === prismaErrorCode.DUPLICATE) {
        return {
          isSuccess: false,
          error: { field: 'skill', message: 'Skill name already exists' },
        };
      }

      return {
        isSuccess: false,
        error: { field: 'skill', message: 'Failed to create skill' },
      };
    }
  }
}

export { SkillService };
