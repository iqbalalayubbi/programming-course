import { ChallengeModel } from '@/models';
import { ServiceResponse } from './serviceResponseType';

type ChallengeServiceType = {
  create(data: ChallengeModel): Promise<ServiceResponse>;
  getAll(): Promise<ServiceResponse>;
};

export { ChallengeServiceType };
