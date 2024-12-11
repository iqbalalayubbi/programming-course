import { CourseContentServiceType } from '@/services';
import { formatResponse } from '@/utils';
import { statusCode } from 'common';
import { Request, Response } from 'express';

type Constructor = {
  courseContentService: CourseContentServiceType;
};

class CourseContentController {
  private courseContentService: CourseContentServiceType;

  public constructor({ courseContentService }: Constructor) {
    this.courseContentService = courseContentService;

    this.createCourseContent = this.createCourseContent.bind(this);
    this.updateCourseContent = this.updateCourseContent.bind(this);
  }

  async createCourseContent(req: Request, res: Response) {
    const data = req.body;
    const { courseId } = req.params;

    const {
      isSuccess,
      data: courseContent,
      error,
    } = await this.courseContentService.create(Number(courseId), data);

    if (isSuccess && data) {
      return formatResponse({
        res,
        statusCode: statusCode.CREATED,
        message: 'Course content created successfully',
        data: courseContent,
      });
    }

    if (error) {
      return formatResponse({
        res,
        statusCode: statusCode.BAD_REQUEST,
        message: error.message,
        errors: [{ field: error.field, message: error.message }],
      });
    }

    return formatResponse({
      res,
      statusCode: statusCode.INTERNAL_SERVER_ERROR,
      message: 'Failed to create course content',
    });
  }

  async updateCourseContent(req: Request, res: Response) {
    const { courseContentId } = req.params;
    const data = req.body;

    const {
      isSuccess,
      data: updatedCourseContent,
      error,
    } = await this.courseContentService.update(Number(courseContentId), data);

    if (isSuccess && updatedCourseContent) {
      return formatResponse({
        res,
        statusCode: statusCode.OK,
        message: 'Course content updated successfully',
        data: updatedCourseContent,
      });
    }

    if (error) {
      return formatResponse({
        res,
        statusCode: statusCode.BAD_REQUEST,
        message: error.message,
        errors: [{ field: error.field, message: error.message }],
      });
    }

    return formatResponse({
      res,
      statusCode: statusCode.INTERNAL_SERVER_ERROR,
      message: 'Failed to update course content',
    });
  }
}

export { CourseContentController };
