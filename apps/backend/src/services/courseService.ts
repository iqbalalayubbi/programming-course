import { CourseModel } from '@/models';
import { PrismaClient } from '@prisma/client';
import { ServiceResponse } from './types';

type Constructor = {
  prismaClient: PrismaClient;
};

class CourseService {
  private courseModel: PrismaClient['course'];

  public constructor({ prismaClient }: Constructor) {
    this.courseModel = prismaClient.course;
  }

  async create(data: CourseModel): Promise<ServiceResponse> {
    try {
      const course = await this.courseModel.create({ data });
      return {
        isSuccess: true,
        data: { course },
      };
    } catch {
      return {
        isSuccess: false,
        error: {
          field: 'course',
          message: 'Failed to create course',
        },
      };
    }
  }

  async update(id: number, data: CourseModel): Promise<ServiceResponse> {
    try {
      const course = await this.courseModel.update({
        where: { id },
        data,
      });
      return {
        isSuccess: true,
        data: { course },
      };
    } catch {
      return {
        isSuccess: false,
        error: {
          field: 'course',
          message: 'Failed to update course',
        },
      };
    }
  }

  async getAll(): Promise<ServiceResponse> {
    try {
      const courses = await this.courseModel.findMany();
      return {
        isSuccess: true,
        data: { courses },
      };
    } catch {
      return {
        isSuccess: false,
        error: {
          field: 'course',
          message: 'Failed to get courses',
        },
      };
    }
  }
}

export { CourseService };
