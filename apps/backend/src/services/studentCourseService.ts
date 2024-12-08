import { StudentCourseModel } from '@/models';
import { PrismaClient } from '@prisma/client';
import { ServiceResponse } from './types';

type Constructor = {
  prismaClient: PrismaClient;
};

class StudentCourseService {
  private studentCourseModel: PrismaClient['studentCourse'];

  constructor({ prismaClient }: Constructor) {
    this.studentCourseModel = prismaClient.studentCourse;
  }

  async create(data: StudentCourseModel): Promise<ServiceResponse> {
    try {
      const studentCourse = await this.studentCourseModel.create({
        data,
      });

      return {
        isSuccess: true,
        data: { studentCourse },
      };
    } catch {
      return {
        isSuccess: false,
        error: {
          field: 'course',
          message: 'Failed to create student course',
        },
      };
    }
  }
}

export { StudentCourseService };
