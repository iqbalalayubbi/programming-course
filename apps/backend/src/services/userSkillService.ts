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

  async create(username: string, skill: string): Promise<ServiceResponse> {
    try {
      const hasDuplicateSkill = await this.isSkillDuplicate(username, skill);
      if (hasDuplicateSkill) {
        return {
          isSuccess: false,
          error: { field: 'skill', message: 'User already has this skill' },
        };
      }

      const userSkill = await this.userSkillModel.create({
        data: {
          user_username: username,
          skill_name: skill,
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

  async isSkillDuplicate(username: string, skill: string): Promise<boolean> {
    try {
      const count = await this.userSkillModel.count({
        where: {
          user_username: username,
          skill_name: skill,
        },
      });
      return count > 0;
    } catch {
      return false;
    }
  }

  async findUserSkills(username: string): Promise<ServiceResponse> {
    try {
      const userSkills = await this.userSkillModel.findMany({
        where: { user_username: username },
      });

      if (userSkills.length === 0) {
        return {
          isSuccess: false,
          error: { field: 'skill', message: 'User has no skills' },
        };
      }

      return {
        isSuccess: true,
        data: { userSkills },
      };
    } catch {
      return {
        isSuccess: false,
        error: { field: 'user', message: 'User not found' },
      };
    }
  }

  async deleteUserSkills(ids: number[]): Promise<ServiceResponse> {
    try {
      const deletedUserSkills = await this.userSkillModel.deleteMany({
        where: { id: { in: ids } },
      });

      if (!deletedUserSkills) {
        return {
          isSuccess: false,
          error: { field: 'skill', message: 'User skill not found' },
        };
      }

      return {
        isSuccess: true,
      };
    } catch {
      return {
        isSuccess: false,
        error: { field: 'skill', message: 'Failed to delete user skill' },
      };
    }
  }
}

export { UserSkillService };
