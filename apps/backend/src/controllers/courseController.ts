import { CourseServiceType } from '@/services';
import { formatResponse } from '@/utils';
import { statusCode } from 'common';
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
    this.getAllCourses = this.getAllCourses.bind(this);
    this.getCourseById = this.getCourseById.bind(this);
  }

  async createCourse(req: Request, res: Response) {
    const data = { ...req.body, thumbnail_url: '' };
    const file = req.file;

    const {
      isSuccess,
      error,
      data: course,
    } = await this.courseService.create(data);

    if (isSuccess && data && file) {
      await this.courseService.updateThumbnail(
        Number(course?.course?.id),
        file.filename,
      );

      return formatResponse({
        res,
        statusCode: statusCode.CREATED,
        message: 'Course created successfully',
        data: course,
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
        statusCode: statusCode.OK,
        message: 'Course updated successfully',
        data: { course: updatedCourse },
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
      message: 'Failed to update course',
    });
  }

  async getAllCourses(req: Request, res: Response) {
    const {
      isSuccess,
      error,
      data: courses,
    } = await this.courseService.getAll();

    if (isSuccess && courses) {
      return formatResponse({
        res,
        statusCode: statusCode.OK,
        message: 'Courses retrieved successfully',
        data: courses,
      });
    }

    if (error) {
      return formatResponse({
        res,
        statusCode: statusCode.INTERNAL_SERVER_ERROR,
        message: error.message,
      });
    }

    return formatResponse({
      res,
      statusCode: statusCode.INTERNAL_SERVER_ERROR,
      message: 'Failed to retrieve courses',
    });
  }

  async getCourseById(req: Request, res: Response) {
    const { id } = req.params;

    const {
      isSuccess,
      error,
      data: course,
    } = await this.courseService.getById(Number(id));

    if (isSuccess && course) {
      return formatResponse({
        res,
        statusCode: statusCode.OK,
        message: 'Course retrieved successfully',
        data: course,
      });
    }

    if (error) {
      return formatResponse({
        res,
        statusCode: statusCode.NOT_FOUND,
        message: error.message,
        errors: [{ field: error.field, message: error.message }],
      });
    }

    return formatResponse({
      res,
      statusCode: statusCode.INTERNAL_SERVER_ERROR,
      message: 'Failed to retrieve course',
    });
  }
}

export { CourseController };
