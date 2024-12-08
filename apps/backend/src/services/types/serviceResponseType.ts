import {
  UserModel,
  SkillModel,
  UserSkillModel,
  CourseModel,
  CourseContentModel,
  StudentCourseModel,
} from '@/models';

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
    studentCourse?: StudentCourseModel;
    studentCourses?: StudentCourseModel[];
    token?: string;
  };
};

export { type ServiceResponse };
