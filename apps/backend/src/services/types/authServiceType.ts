import { UserModel } from '@/models';

type RegisterResponse = {
  isSuccess: boolean;
  error?: { field: 'email' | 'username'; message: string };
  data?: UserModel;
};

type AuthServiceType = {
  isEmailExist(email: string): Promise<boolean>;
  isUsernameExist(username: string): Promise<boolean>;
  isDuplicateRole(email: string, role: string): Promise<boolean>;
  register(user: UserModel): Promise<RegisterResponse>;
};

export { type AuthServiceType };
