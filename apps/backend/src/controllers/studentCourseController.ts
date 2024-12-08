import { studentCourseService } from '@/services';
import { formatResponse } from '@/utils';
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
}

export { StudentCourseController };
