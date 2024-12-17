import { ChallengeSubmissionServiceType } from '@/services';
import { formatResponse } from '@/utils';
import { statusCode } from 'common';
import { NextFunction, Request, Response } from 'express';

type Constructor = {
  challengeSubmissionService: ChallengeSubmissionServiceType;
};

class ChallengeSubmissionController {
  private challengeSubmissionService: ChallengeSubmissionServiceType;

  public constructor({ challengeSubmissionService }: Constructor) {
    this.challengeSubmissionService = challengeSubmissionService;

    this.createChallengeSubmission = this.createChallengeSubmission.bind(this);
    this.getAllChallenges = this.getAllChallenges.bind(this);
    this.getByUsername = this.getByUsername.bind(this);
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

  async getByUsername(req: Request, res: Response, next: NextFunction) {
    const { username } = req.query;

    if (!username) {
      return next();
    }

    const { isSuccess, data, error } =
      await this.challengeSubmissionService.getByUsername(username as string);

    if (isSuccess && data) {
      return formatResponse({
        res,
        statusCode: statusCode.OK,
        message: 'Challenges retrieved successfully for user',
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
      message: 'Failed to get challenges for user',
    });
  }
}

export { ChallengeSubmissionController };
