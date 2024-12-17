import { ChallengeSubmissionServiceType } from '@/services';
import { formatResponse } from '@/utils';
import { statusCode } from 'common';
import { Request, Response } from 'express';

type Constructor = {
  challengeSubmissionService: ChallengeSubmissionServiceType;
};

class ChallengeSubmissionController {
  private challengeSubmissionService: ChallengeSubmissionServiceType;

  public constructor({ challengeSubmissionService }: Constructor) {
    this.challengeSubmissionService = challengeSubmissionService;

    this.createChallengeSubmission = this.createChallengeSubmission.bind(this);
    this.getAllChallenges = this.getAllChallenges.bind(this);
  }

  async createChallengeSubmission(req: Request, res: Response) {
    const newData = req.body;

    const { isSuccess, data, error } =
      await this.challengeSubmissionService.create(newData);

    if (isSuccess && data) {
      return formatResponse({
        res,
        statusCode: statusCode.CREATED,
        message: 'Challenge submission created successfully',
        data,
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
      message: 'Failed to create challenge submission',
    });
  }

  async getAllChallenges(req: Request, res: Response) {
    const { isSuccess, data, error } =
      await this.challengeSubmissionService.getAll();

    if (isSuccess && data) {
      return formatResponse({
        res,
        statusCode: statusCode.OK,
        message: 'Challenges retrieved successfully',
        data,
      });
    }

    if (error) {
      return formatResponse({
        res,
        statusCode: statusCode.NOT_FOUND,
        message: error.message,
        errors: [{ field: error.field, message: error.message }],
      });
    }

    return formatResponse({
      res,
      statusCode: statusCode.INTERNAL_SERVER_ERROR,
      message: 'Failed to get all challenges',
    });
  }
}

export { ChallengeSubmissionController };
