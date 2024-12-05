import { userSkillService } from '@/services';
import { Request, Response } from 'express';
import { formatResponse } from '@/utils';
import { StatusCode } from 'common';

class UserSkillController {
  async createUserSkill(req: Request, res: Response) {
    const { userId, skillId } = req.body;

    const { isSuccess, data, error } = await userSkillService.create(
      userId,
      skillId,
    );

    if (isSuccess && data) {
      return formatResponse({
        res,
        statusCode: StatusCode.CREATED,
        message: 'User skill created successfully',
        data: { userSkill: data.userSkill },
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
      message: 'Error creating user skill',
    });
  }
}

export { UserSkillController };
