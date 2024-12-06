import { UserModel, SkillModel, UserSkillModel, CourseModel } from '@/models';

type FieldType =
  | keyof UserModel
  | keyof SkillModel
  | keyof CourseModel
  | 'token'
  | 'user'
  | 'otp'
  | 'skill'
  | 'course';

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
    course?: CourseModel;
    courses?: CourseModel;
    token?: string;
  };
};

export { type ServiceResponse };
