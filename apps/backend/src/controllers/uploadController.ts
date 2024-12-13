import { UserServiceType } from '@/services';
import { formatResponse } from '@/utils';
import { statusCode } from 'common';
import { Request, Response } from 'express';

class UploadController {
  private userService: UserServiceType;

  constructor(userService: UserServiceType) {
    this.userService = userService;

    this.updateUserProfile = this.updateUserProfile.bind(this);
  }

  async updateUserProfile(req: Request, res: Response) {
    const {
      file,
      query: { username },
    } = req;

    if (!file) {
      return formatResponse({
        res,
        statusCode: statusCode.BAD_REQUEST,
        message: 'No file provided',
      });
    }

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

  // async uploadFile(req: Request, res: Response) {
  //   const { file } = req;

  //   if (!file) {
  //     return formatResponse({
  //       res,
  //       statusCode: statusCode.BAD_REQUEST,
  //       message: 'No file provided',
  //     });
  //   }

  //   return formatResponse({
  //     res,
  //     statusCode: statusCode.OK,
  //     message: 'File uploaded successfully',
  //     data: { file },
  //   });
  // }
}

export { UploadController };
