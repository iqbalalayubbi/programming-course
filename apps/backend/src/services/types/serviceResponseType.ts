import { UserModel } from '@/models';

type FieldType = keyof UserModel | 'token' | 'user';

type ServiceResponse = {
  isSuccess: boolean;
  error?: { field: FieldType; message: string };
  data?: UserModel;
};

export { type ServiceResponse };
