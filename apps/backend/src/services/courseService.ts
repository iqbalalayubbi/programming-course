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

  async getById(id: number): Promise<ServiceResponse> {
    try {
      const course = await this.courseModel.findUnique({ where: { id } });
      if (!course) {
        return {
          isSuccess: false,
          error: { field: 'course', message: 'Course not found' },
        };
      }
      return {
        isSuccess: true,
        data: { course },
      };
    } catch {
      return {
        isSuccess: false,
        error: {
          field: 'course',
          message: 'Failed to get course by ID',
        },
      };
    }
  }

  async updateThumbnail(
    id: number,
    filename: string,
  ): Promise<ServiceResponse> {
    try {
      const course = await this.courseModel.update({
        where: { id },
        data: { thumbnail_url: `${process.env.VIDEO_URL}/${filename}` },
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
          message: 'Failed to update course thumbnail',
        },
      };
    }
  }

  async updateVideo(id: number, filename: string): Promise<ServiceResponse> {
    try {
      console.log(`${process.env.VIDEO_URL}/${filename}`);
      const course = await this.courseModel.update({
        where: { id },
        data: { video_url: `${process.env.VIDEO_URL}/${filename}` },
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
          message: 'Failed to update course thumbnail',
        },
      };
    }
  }
}

export { CourseService };
