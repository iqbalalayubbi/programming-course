import { ChallengeModel } from '@/models';
import { ServiceResponse } from './serviceResponseType';

type ChallengeServiceType = {
  create(data: ChallengeModel): Promise<ServiceResponse>;
};

export { ChallengeServiceType };
