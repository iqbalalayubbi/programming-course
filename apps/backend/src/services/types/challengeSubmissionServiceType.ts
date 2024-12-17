import { ChallengeSubmissionModel } from '@/models';
import { ServiceResponse } from './serviceResponseType';

type ChallengeSubmissionServiceType = {
  create(data: ChallengeSubmissionModel): Promise<ServiceResponse>;
  getAll(): Promise<ServiceResponse>;
};

export { ChallengeSubmissionServiceType };
