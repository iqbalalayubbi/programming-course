import { CourseServiceType } from '@/services';
import { formatResponse } from '@/utils';
import { StatusCode } from 'common';
import { Request, Response } from 'express';

type Constructor = {
  courseService: CourseServiceType;
};

class CourseController {
  private courseService: CourseServiceType;

  public constructor({ courseService }: Constructor) {
    this.courseService = courseService;

    this.createCourse = this.createCourse.bind(this);
    this.updateCourse = this.updateCourse.bind(this);
  }

  async createCourse(req: Request, res: Response) {
    const data = req.body;

    const {
      isSuccess,
      error,
      data: course,
    } = await this.courseService.create(data);

    if (isSuccess && data) {
      return formatResponse({
        res,
        statusCode: StatusCode.CREATED,
        message: 'Course created successfully',
        data: { course },
      });
    }

    if (error) {
      return formatResponse({
        res,
        statusCode: StatusCode.BAD_REQUEST,
        message: error.message,
        errors: [{ field: error.field, message: error.message }],
      });
    }

    return formatResponse({
      res,
      statusCode: StatusCode.INTERNAL_SERVER_ERROR,
      message: 'Failed to create course',
    });
  }

  async updateCourse(req: Request, res: Response) {
    const { id } = req.params;
    const data = req.body;

    const {
      isSuccess,
      error,
      data: updatedCourse,
    } = await this.courseService.update(Number(id), data);

    if (isSuccess && updatedCourse) {
      return formatResponse({
        res,
        statusCode: StatusCode.OK,
        message: 'Course updated successfully',
        data: { course: updatedCourse },
      });
    }

    if (error) {
      return formatResponse({
        res,
        statusCode: StatusCode.BAD_REQUEST,
        message: error.message,
        errors: [{ field: error.field, message: error.message }],
      });
    }

    return formatResponse({
      res,
      statusCode: StatusCode.INTERNAL_SERVER_ERROR,
      message: 'Failed to update course',
    });
  }
}

export { CourseController };
