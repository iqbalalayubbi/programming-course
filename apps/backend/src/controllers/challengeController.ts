import { ChallengeServiceType } from '@/services';
import { formatResponse } from '@/utils';
import { statusCode } from 'common';
import { Request, Response } from 'express';

type Constructor = {
  challengeService: ChallengeServiceType;
};

class ChallengeController {
  private challengeService: ChallengeServiceType;

  public constructor({ challengeService }: Constructor) {
    this.challengeService = challengeService;

    this.createChallenge = this.createChallenge.bind(this);
    this.getAllChallenges = this.getAllChallenges.bind(this);
  }

  async createChallenge(req: Request, res: Response) {
    const newData = req.body;

    const { isSuccess, data, error } =
      await this.challengeService.create(newData);

    if (isSuccess && data) {
      return formatResponse({
        res,
        statusCode: statusCode.CREATED,
        message: 'Challenge created successfully',
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
      statusCode: statusCode.NOT_FOUND,
      message: 'Failed to create new challenge',
    });
  }

  async getAllChallenges(req: Request, res: Response) {
    const { isSuccess, data, error } = await this.challengeService.getAll();

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
        statusCode: statusCode.INTERNAL_SERVER_ERROR,
        message: error.message,
      });
    }

    return formatResponse({
      res,
      statusCode: statusCode.NOT_FOUND,
      message: 'Failed to retrieve challenges',
    });
  }
}

export { ChallengeController };
