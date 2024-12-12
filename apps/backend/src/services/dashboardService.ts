import { PrismaClient } from '@prisma/client';
import { StudentCourseService } from './studentCourseService';
import { ServiceResponse } from './types';
import { CourseModel } from '@/models';

type Constructor = {
  prismaClient: PrismaClient;
  studentCourseService: StudentCourseService;
};

class DashboardService {
  private studentCourseService: StudentCourseService;
  private userModel: PrismaClient['user'];

  public constructor({ prismaClient, studentCourseService }: Constructor) {
    this.userModel = prismaClient.user;
    this.studentCourseService = studentCourseService;
  }

  async getStudentCoursesDetails(username: string): Promise<ServiceResponse> {
    try {
      const userCourses = await this.userModel.findUnique({
        where: {
          username: username,
        },
        select: {
          studentCourses: {
            select: {
              course: true,
            },
          },
        },
      });

      const courses = userCourses?.studentCourses.map(
        (studentCourse) => studentCourse.course,
      ) as unknown as CourseModel[];

      if (userCourses) {
        return { isSuccess: true, data: { courses } };
      }

      return {
        isSuccess: false,
        error: { field: 'user', message: 'User not found' },
      };
    } catch {
      return {
        isSuccess: false,
        error: { field: 'user', message: 'Error fetching user courses' },
      };
    }
  }
}

export { DashboardService };
