import { userSkillService } from '@/services';
import { Request, Response } from 'express';
import { formatResponse } from '@/utils';
import { statusCode } from 'common';

class UserSkillController {
  async createUserSkill(req: Request, res: Response) {
    const { username, skill } = req.body;

    const { isSuccess, data, error } = await userSkillService.create(
      username,
      skill,
    );

    if (isSuccess && data) {
      return formatResponse({
        res,
        statusCode: statusCode.CREATED,
        message: 'User skill created successfully',
        data: { userSkill: data.userSkill },
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
      message: 'Error creating user skill',
    });
  }

  async getUserSkills(req: Request, res: Response) {
    const { username } = req.query;

    const { isSuccess, data, error } = await userSkillService.findUserSkills(
      username as string,
    );

    if (isSuccess && data) {
      return formatResponse({
        res,
        statusCode: statusCode.OK,
        message: 'User skills retrieved successfully',
        data: { userSkills: data.userSkills },
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
      message: 'error get user skills',
    });
  }

  async deleteUserSkills(req: Request, res: Response) {
    const { ids } = req.body;

    const { isSuccess, error } = await userSkillService.deleteUserSkills(ids);

    if (isSuccess) {
      return formatResponse({
        res,
        statusCode: statusCode.OK,
        message: 'User skills deleted successfully',
      });
    }

    if (error) {
      return formatResponse({
        res,
        statusCode: statusCode.INTERNAL_SERVER_ERROR,
        message: error.message,
        errors: [{ field: error.field, message: error.message }],
      });
    }

    return formatResponse({
      res,
      statusCode: statusCode.INTERNAL_SERVER_ERROR,
      message: 'Error deleting user skills',
    });
  }
}

export { UserSkillController };
