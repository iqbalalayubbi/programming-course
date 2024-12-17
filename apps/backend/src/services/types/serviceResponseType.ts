import {
  UserModel,
  SkillModel,
  UserSkillModel,
  CourseModel,
  CourseContentModel,
  StudentCourseModel,
  NoteModel,
  ChallengeModel,
} from '@/models';

type FieldType =
  | keyof UserModel
  | keyof SkillModel
  | keyof CourseModel
  | keyof CourseContentModel
  | keyof StudentCourseModel
  | keyof NoteModel
  | 'token'
  | 'user'
  | 'otp'
  | 'skill'
  | 'course'
  | 'content'
  | 'note'
  | 'challenge';

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
    courseContents?: CourseContentModel[];
    studentCourse?: StudentCourseModel;
    studentCourses?: StudentCourseModel[];
    note?: NoteModel;
    notes?: NoteModel[];
    challenge?: ChallengeModel;
    challenges?: ChallengeModel[];
    token?: string;
  };
};

export { type ServiceResponse };
