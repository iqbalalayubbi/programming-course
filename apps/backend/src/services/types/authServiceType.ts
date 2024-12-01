import { UserModel } from '@/models';
import { type ServiceResponse } from './serviceResponseType';

type AuthServiceType = {
  isEmailExist(email: string): Promise<boolean>;
  isUsernameExist(username: string): Promise<boolean>;
  isDuplicateRole(email: string, role: string): Promise<boolean>;
  register(user: UserModel): Promise<ServiceResponse>;
  verifyEmail(token: string): Promise<ServiceResponse>;
};

export { type AuthServiceType };
