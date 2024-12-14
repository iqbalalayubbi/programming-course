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
  message: string;
  errors?: { field: FieldType; message: string };
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
    courseContents?: CourseContentModel[];
    studentCourse?: StudentCourseModel;
    studentCourses?: StudentCourseModel[];
    accessToken?: string;
  };
};

export { type ResponseApiType };
