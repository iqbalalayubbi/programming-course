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

  async getByPage(courseId: number, page: number): Promise<ServiceResponse> {
    try {
      const courseContent = await this.courseContentModel.findFirst({
        where: { course_id: courseId, page },
        take: 10,
        skip: (page - 1) * 10,
        orderBy: { id: 'desc' },
      });

      if (courseContent) {
        return {
          isSuccess: true,
          data: { courseContent },
        };
      }
      return {
        isSuccess: false,
        error: {
          field: 'course',
          message: 'Course not found',
        },
      };
    } catch {
      return {
        isSuccess: false,
        error: {
          field: 'course',
          message: 'Failed to get course contents',
        },
      };
    }
  }

  async updateVideo(id: number, filename: string): Promise<ServiceResponse> {
    try {
      const courseContent = await this.courseContentModel.update({
        where: { id },
        data: { video_url: `${process.env.VIDEO_URL}/${filename}` },
      });
      return {
        isSuccess: true,
        data: { courseContent },
      };
    } catch {
      return {
        isSuccess: false,
        error: {
          field: 'course',
          message: 'Failed to update course thumbnail',
        },
      };
    }
  }
}

export { CourseContentService };
