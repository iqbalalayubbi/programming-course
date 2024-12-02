import { UserModel } from '@/models';

type FieldType = keyof UserModel | 'token' | 'user' | 'otp';

type ServiceResponse = {
  isSuccess: boolean;
  error?: { field: FieldType; message: string };
  data?: { user?: UserModel; token?: string };
};

export { type ServiceResponse };
