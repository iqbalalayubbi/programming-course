import {
  UserModel,
  SkillModel,
  UserSkillModel,
  CourseModel,
  CourseContentModel,
} from '@/models';

type FieldType =
  | keyof UserModel
  | keyof SkillModel
  | keyof CourseModel
  | keyof CourseContentModel
  | 'token'
  | 'user'
  | 'otp'
  | 'skill'
  | 'course'
  | 'content';

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
    courses?: CourseModel[];
    courseContent?: CourseContentModel;
    contentContents?: CourseContentModel[];
    token?: string;
  };
};

export { type ServiceResponse };
