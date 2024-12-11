import { studentCourseService } from '@/services';
import { formatResponse } from '@/utils';
import { statusCode } from 'common';
import { Request, Response } from 'express';

class StudentCourseController {
  async createStudentCourse(req: Request, res: Response) {
    const data = req.body;
    const {
      isSuccess,
      error,
      data: studentCourse,
    } = await studentCourseService.create(data);

    if (isSuccess) {
      return formatResponse({
        res,
        statusCode: 201,
        message: 'Student course created successfully',
        data: studentCourse,
      });
    }

    if (error) {
      return formatResponse({
        res,
        statusCode: 400,
        message: error.message,
        errors: [{ field: error.field, message: error.message }],
      });
    }
    return formatResponse({
      res,
      statusCode: 500,
      message: 'Error creating student course',
    });
  }

  async getStudentCourses(req: Request, res: Response) {
    const { username } = req.query;

    const {
      isSuccess,
      error,
      data: studentCourses,
    } = await studentCourseService.getAll(username as string);

    if (isSuccess) {
      return formatResponse({
        res,
        statusCode: statusCode.OK,
        message: 'Student courses retrieved successfully',
        data: studentCourses,
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
      statusCode: 500,
      message: 'Error retrieving student courses',
    });
  }

  async updateStudentCourse(req: Request, res: Response) {
    const { id } = req.params;
    const data = { ...req.body, id: Number(id) };

    const {
      isSuccess,
      error,
      data: updatedStudentCourse,
    } = await studentCourseService.update(data);

    if (isSuccess) {
      return formatResponse({
        res,
        statusCode: statusCode.OK,
        message: 'Student course updated successfully',
        data: updatedStudentCourse,
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
      statusCode: 500,
      message: 'Error updating student course',
    });
  }
}

export { StudentCourseController };
