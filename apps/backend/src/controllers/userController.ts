import { UserServiceType } from '@/services';
import { formatResponse } from '@/utils';
import { statusCode } from 'common';
import { Request, Response } from 'express';

type Constructor = {
  userService: UserServiceType;
};

class UserController {
  private userService: UserServiceType;

  public constructor({ userService }: Constructor) {
    this.userService = userService;

    this.orderUsersByPoint = this.orderUsersByPoint.bind(this);
  }

  async orderUsersByPoint(req: Request, res: Response) {
    const { isSuccess, data, error } =
      await this.userService.orderUsersByPoint();

    if (isSuccess && data) {
      return formatResponse({
        res,
        statusCode: statusCode.OK,
        message: 'Users ordered by points successfully',
        data,
      });
    }

    if (error) {
      return formatResponse({
        res,
        statusCode: statusCode.NOT_FOUND,
        message: 'Failed to order users by points',
        errors: [{ field: error.field, message: error.message }],
      });
    }

    return formatResponse({
      res,
      statusCode: statusCode.INTERNAL_SERVER_ERROR,
      message: 'Failed to retrieve users',
    });
  }
}

export { UserController };
