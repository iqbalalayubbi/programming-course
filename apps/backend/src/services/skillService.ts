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

  async getSkills(): Promise<ServiceResponse> {
    try {
      const skills = await this.skillModel.findMany();
      return {
        isSuccess: true,
        data: { skills },
      };
    } catch {
      return {
        isSuccess: false,
        error: { field: 'skill', message: 'Failed to get skills' },
      };
    }
  }

  async getById(id: number): Promise<ServiceResponse> {
    try {
      const skill = await this.skillModel.findUnique({ where: { id } });
      if (!skill) {
        return {
          isSuccess: false,
          error: { field: 'skill', message: 'Skill not found' },
        };
      }
      return {
        isSuccess: true,
        data: { skill },
      };
    } catch {
      return {
        isSuccess: false,
        error: { field: 'skill', message: 'Failed to get skill' },
      };
    }
  }

  async getByUsername(username: string): Promise<ServiceResponse> {
    try {
      const skills = await this.skillModel.findMany({
        where: {
          users: {
            some: {
              user: {
                username,
              },
            },
          },
        },
      });

      if (skills.length === 0) {
        return {
          isSuccess: false,
          error: { field: 'skill', message: 'User does not have any skills' },
        };
      }

      return {
        isSuccess: true,
        data: { skills },
      };
    } catch {
      return {
        isSuccess: false,
        error: { field: 'user', message: 'Failed to get skills by username' },
      };
    }
  }
}

export { SkillService };
