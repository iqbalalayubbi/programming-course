import { ChallengeModel } from '@/models';
import { ServiceResponse } from './serviceResponseType';

type ChallengeServiceType = {
  create(data: ChallengeModel): Promise<ServiceResponse>;
  getAll(): Promise<ServiceResponse>;
  getById(id: number): Promise<ServiceResponse>;
};

export { ChallengeServiceType };
