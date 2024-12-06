import { UserModel, SkillModel, UserSkillModel } from '@/models';

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
    skill?: SkillModel;
    skills?: SkillModel[];
    user?: UserModel;
    users?: UserModel[];
    userSkill?: UserSkillModel;
    userSkills?: UserSkillModel[];
    token?: string;
  };
};

export { type ServiceResponse };
