import { StudentCourseModel } from '@/models';
import { PrismaClient } from '@prisma/client';
import { ServiceResponse } from './types';

type Constructor = {
  prismaClient: PrismaClient;
};

type UpdateType = {
  id: number;
  is_finished?: boolean;
  certificate_url?: string;
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

  async getAll(username: string): Promise<ServiceResponse> {
    try {
      const studentCourses = await this.studentCourseModel.findMany({
        where: { user_username: username },
      });

      return {
        isSuccess: true,
        data: { studentCourses },
      };
    } catch {
      return {
        isSuccess: false,
        error: {
          field: 'course',
          message: 'Failed to get student courses',
        },
      };
    }
  }

  async update(data: UpdateType): Promise<ServiceResponse> {
    try {
      const updatedStudentCourse = await this.studentCourseModel.update({
        where: { id: data.id },
        data,
      });

      return {
        isSuccess: true,
        data: { studentCourse: updatedStudentCourse },
      };
    } catch {
      return {
        isSuccess: false,
        error: {
          field: 'course',
          message: 'Failed to update student course',
        },
      };
    }
  }

  async findByCourseId(courseId: number): Promise<ServiceResponse> {
    try {
      const studentCourses = await this.studentCourseModel.findMany({
        where: { course_id: courseId },
      });

      if (!studentCourses) {
        return {
          isSuccess: false,
          error: {
            field: 'course',
            message: 'Student course not found',
          },
        };
      }

      return {
        isSuccess: true,
        data: { studentCourses },
      };
    } catch {
      return {
        isSuccess: false,
        error: {
          field: 'course',
          message: 'Failed to find student course by course id',
        },
      };
    }
  }
}

export { StudentCourseService };
