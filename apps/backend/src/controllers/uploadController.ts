import { formatResponse } from '@/utils';
import { statusCode } from 'common';
import { Request, Response } from 'express';

class UploadController {
  async uploadFile(req: Request, res: Response) {
    const { file } = req;
    if (!file) {
      return formatResponse({
        res,
        statusCode: statusCode.BAD_REQUEST,
        message: 'No file provided',
      });
    }

    return formatResponse({
      res,
      statusCode: statusCode.OK,
      message: 'File uploaded successfully',
      data: { file },
    });
  }
}

export { UploadController };
