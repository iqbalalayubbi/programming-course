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

  async update(
    courseContentId: number,
    data: CourseContentModel,
  ): Promise<ServiceResponse> {
    try {
      const updatedCourseContent = await this.courseContentModel.update({
        where: { id: courseContentId },
        data,
      });
      return {
        isSuccess: true,
        data: { courseContent: updatedCourseContent },
      };
    } catch (err) {
      console.log(err);
      return {
        isSuccess: false,
        error: {
          field: 'content',
          message: 'Failed to update course content',
        },
      };
    }
  }
}

export { CourseContentService };
