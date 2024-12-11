import {
  type CourseContentModel,
  type CourseModel,
  type SkillModel,
  type StudentCourseModel,
  type UserModel,
  type UserSkillModel,
} from '../modelsType';

type FieldType =
  | keyof UserModel
  | keyof SkillModel
  | keyof CourseModel
  | keyof CourseContentModel
  | keyof StudentCourseModel
  | 'token'
  | 'user'
  | 'otp'
  | 'skill'
  | 'course'
  | 'content';

type ResponseApiType = {
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
    studentCourse?: StudentCourseModel;
    studentCourses?: StudentCourseModel[];
    token?: string;
  };
};

export { type ResponseApiType };
