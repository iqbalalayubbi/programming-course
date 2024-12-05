import { skillService } from '@/services';
import { Request, Response } from 'express';
import { formatResponse } from '@/utils';
import { StatusCode } from 'common';

class SkillController {
  async createSkill(req: Request, res: Response) {
    const { name } = req.body;
    const { isSuccess, data, error } = await skillService.create(name);

    if (isSuccess && data) {
      return formatResponse({
        res,
        statusCode: StatusCode.CREATED,
        message: 'Skill created successfully',
        data: { skill: data.skill },
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
      message: 'Error creating skill',
    });
  }
}

export { SkillController };
