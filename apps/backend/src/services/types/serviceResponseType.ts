import { UserModel, SkillModel } from '@/models';

type FieldType =
  | keyof UserModel
  | keyof SkillModel
  | 'token'
  | 'user'
  | 'otp'
  | 'skill';

type ServiceResponse = {
  isSuccess: boolean;
  error?: { field: FieldType; message: string };
  data?: {
    user?: UserModel;
    token?: string;
    skill?: SkillModel;
    skills?: SkillModel[];
    users?: UserModel[];
  };
};

export { type ServiceResponse };
