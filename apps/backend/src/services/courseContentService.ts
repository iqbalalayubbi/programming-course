import { CourseContentModel } from '@/models';
import { PrismaClient } from '@prisma/client';
import { ServiceResponse } from './types';

type Constructor = {
  prismaClient: PrismaClient;
};

class CourseContentService {
  private courseContentModel: PrismaClient['courseContent'];

  public constructor({ prismaClient }: Constructor) {
    this.courseContentModel = prismaClient.courseContent;
  }

  async create(
    courseId: number,
    data: CourseContentModel,
  ): Promise<ServiceResponse> {
    const newCourseContent = { ...data, course_id: courseId };
    try {
      const courseContent = await this.courseContentModel.create({
        data: newCourseContent,
      });
      return {
        isSuccess: true,
        data: { courseContent },
      };
    } catch {
      return {
        isSuccess: false,
        error: {
          field: 'content',
          message: 'Failed to create course content',
        },
      };
    }
  }
}

export { CourseContentService };
