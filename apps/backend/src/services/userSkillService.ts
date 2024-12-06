import { PrismaClient } from '@prisma/client';
import { ServiceResponse } from './types';

type Constructor = {
  prismaClient: PrismaClient;
};

class UserSkillService {
  private userSkillModel: PrismaClient['userSkill'];

  public constructor({ prismaClient }: Constructor) {
    this.userSkillModel = prismaClient.userSkill;
  }

  async create(userId: number, skillId: number): Promise<ServiceResponse> {
    try {
      const hasDuplicateSkill = await this.isSkillDuplicate(userId, skillId);
      if (hasDuplicateSkill) {
        return {
          isSuccess: false,
          error: { field: 'skill', message: 'User already has this skill' },
        };
      }

      const userSkill = await this.userSkillModel.create({
        data: {
          user_id: userId,
          skill_id: skillId,
        },
      });

      return {
        isSuccess: true,
        data: { userSkill },
      };
    } catch {
      return {
        isSuccess: false,
        error: { field: 'skill', message: 'Failed to create user skill' },
      };
    }
  }

  async isSkillDuplicate(userId: number, skillId: number): Promise<boolean> {
    try {
      const count = await this.userSkillModel.count({
        where: {
          user_id: userId,
          skill_id: skillId,
        },
      });
      return count > 0;
    } catch {
      return false;
    }
  }
}

export { UserSkillService };
