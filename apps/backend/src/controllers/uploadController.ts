import { CourseServiceType, UserServiceType } from '@/services';
import { formatResponse } from '@/utils';
import { statusCode } from 'common';
import { NextFunction, Request, Response } from 'express';

type Constructor = {
  userService: UserServiceType;
  courseService: CourseServiceType;
};

class UploadController {
  private userService: UserServiceType;
  private courseService: CourseServiceType;

  constructor({ userService, courseService }: Constructor) {
    this.userService = userService;
    this.courseService = courseService;

    this.updateUserProfile = this.updateUserProfile.bind(this);
    this.updateThumbnailCourse = this.updateThumbnailCourse.bind(this);
  }

  async updateUserProfile(req: Request, res: Response, next: NextFunction) {
    const {
      file,
      query: { type },
    } = req;

    if (type !== 'user') {
      return next();
    }

    if (!file) {
      return formatResponse({
        res,
        statusCode: statusCode.BAD_REQUEST,
        message: 'No file provided',
      });
    }

    const username = req.query.username as string;

    if (!username) {
      return formatResponse({
        res,
        statusCode: statusCode.BAD_REQUEST,
        message: 'Username is required',
      });
    }

    const filename = file.filename;

    if (!filename) {
      return formatResponse({
        res,
        statusCode: statusCode.INTERNAL_SERVER_ERROR,
        message: 'Error saving file',
      });
    }

    await this.userService.updateUserProfile(username as string, filename);

    return formatResponse({
      res,
      statusCode: statusCode.OK,
      message: 'File uploaded successfully',
      data: { file },
    });
  }

  async updateThumbnailCourse(req: Request, res: Response) {
    const {
      file,
      query: { courseId },
    } = req;

    if (!file) {
      return formatResponse({
        res,
        statusCode: statusCode.BAD_REQUEST,
        message: 'No file provided',
      });
    }

    if (!courseId) {
      return formatResponse({
        res,
        statusCode: statusCode.BAD_REQUEST,
        message: 'Course ID is required',
      });
    }

    const filename = file.filename;

    if (!filename) {
      return formatResponse({
        res,
        statusCode: statusCode.INTERNAL_SERVER_ERROR,
        message: 'Error saving file',
      });
    }

    await this.courseService.updateThumbnail(Number(courseId), filename);

    return formatResponse({
      res,
      statusCode: statusCode.OK,
      message: 'File uploaded successfully',
      data: { file },
    });
  }

  async updateVideoCourse(req: Request, res: Response) {
    const {
      file,
      query: { courseId },
    } = req;

    if (!file) {
      return formatResponse({
        res,
        statusCode: statusCode.BAD_REQUEST,
        message: 'No file provided',
      });
    }

    if (!courseId) {
      return formatResponse({
        res,
        statusCode: statusCode.BAD_REQUEST,
        message: 'Course ID is required',
      });
    }

    const filename = file.filename;

    if (!filename) {
      return formatResponse({
        res,
        statusCode: statusCode.INTERNAL_SERVER_ERROR,
        message: 'Error saving file',
      });
    }

    await this.courseService.updateVideo(Number(courseId), filename);

    return formatResponse({
      res,
      statusCode: statusCode.OK,
      message: 'File uploaded successfully',
      data: { file },
    });
  }
}

export { UploadController };
