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

  async getSkills(req: Request, res: Response) {
    const { isSuccess, data, error } = await skillService.getSkills();

    if (isSuccess && data) {
      return formatResponse({
        res,
        statusCode: StatusCode.OK,
        message: 'Skills retrieved successfully',
        data: { skills: data.skills },
      });
    }

    if (error) {
      return formatResponse({
        res,
        statusCode: StatusCode.INTERNAL_SERVER_ERROR,
        message: error.message,
      });
    }

    return formatResponse({
      res,
      statusCode: StatusCode.INTERNAL_SERVER_ERROR,
      message: 'Error retrieving skills',
    });
  }

  async getSkillById(req: Request, res: Response) {
    const { id } = req.params;

    const { isSuccess, data, error } = await skillService.getById(Number(id));

    if (isSuccess && data) {
      return formatResponse({
        res,
        statusCode: StatusCode.OK,
        message: 'Skill retrieved successfully',
        data: { skill: data.skill },
      });
    }

    if (error) {
      return formatResponse({
        res,
        statusCode: StatusCode.NOT_FOUND,
        message: error.message,
        errors: [{ field: error.field, message: error.message }],
      });
    }

    return formatResponse({
      res,
      statusCode: StatusCode.NOT_FOUND,
      message: 'Skill not found',
    });
  }
}

export { SkillController };
