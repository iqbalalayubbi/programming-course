import { UserServiceType } from '@/services';
import { formatResponse } from '@/utils';
import { statusCode } from 'common';
import { Request, Response } from 'express';

type Constructor = {
  userService: UserServiceType;
};

type UserData = {
  username: string;
  role: string;
};

class ProfileController {
  private userService: UserServiceType;

  public constructor({ userService }: Constructor) {
    this.userService = userService;

    this.getUserByUsername = this.getUserByUsername.bind(this);
    this.updateUser = this.updateUser.bind(this);
  }

  public async getUserByUsername(req: Request, res: Response) {
    const { username } = req.query.userData as UserData;

    const { isSuccess, error, data } = await this.userService.find({
      key: 'username',
      value: username,
    });

    if (isSuccess && data) {
      return formatResponse({
        res,
        statusCode: statusCode.OK,
        message: 'User retrieved successfully',
        data,
      });
    }

    if (error) {
      return formatResponse({
        res,
        statusCode: statusCode.NOT_FOUND,
        message: error.message,
        errors: [error],
      });
    }

    return formatResponse({
      res,
      statusCode: statusCode.INTERNAL_SERVER_ERROR,
      message: 'Internal server error',
    });
  }

  public async updateUser(req: Request, res: Response) {
    const { id } = req.params;
    const data = req.body;

    const { isSuccess, error } = await this.userService.update(
      Number(id),
      data,
    );

    if (isSuccess) {
      return formatResponse({
        res,
        statusCode: statusCode.OK,
        message: 'User updated successfully',
      });
    }

    if (error) {
      return formatResponse({
        res,
        statusCode: statusCode.INTERNAL_SERVER_ERROR,
        message: error.message,
        errors: [error],
      });
    }

    return formatResponse({
      res,
      statusCode: statusCode.NOT_FOUND,
      message: 'User not found',
    });
  }
}

export { ProfileController };
