import { UserModel } from '@/models';
import { type ServiceResponse } from './serviceResponseType';

type AuthServiceType = {
  isEmailExist(email: string): Promise<boolean>;
  isUsernameExist(username: string): Promise<boolean>;
  isDuplicateRole(email: string, role: string): Promise<boolean>;
  register(user: UserModel): Promise<ServiceResponse>;
  verifyEmail(token: string): Promise<ServiceResponse>;
  login(identifier: string, password: string): Promise<ServiceResponse>;
  forgotPassword(identifier: string): Promise<ServiceResponse>;
  resetPassword(otp: string, password: string): Promise<ServiceResponse>;
  verifyUser(bearerToken: string | undefined): Promise<ServiceResponse>;
};

export { type AuthServiceType };
