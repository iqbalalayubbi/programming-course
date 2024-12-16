import { AuthApi } from './authApi';
import { ProfileApi } from './profileApi';
import { CourseApi } from './courseApi';
import { StudentCourseApi } from './studentCourseApi';
import { DashboardApi } from './dashboardApi';
import { CourseContentApi } from './courseContentApi';
import { PistonApi } from './pistonApi';
import { NoteApi } from './noteApi';

const authApi = new AuthApi();
const profileApi = new ProfileApi();
const courseApi = new CourseApi();
const studentCourseApi = new StudentCourseApi();
const dashboardApi = new DashboardApi();
const courseContentApi = new CourseContentApi();
const pistonApi = new PistonApi();
const noteApi = new NoteApi();

export {
  authApi,
  profileApi,
  courseApi,
  studentCourseApi,
  dashboardApi,
  courseContentApi,
  pistonApi,
  noteApi,
};
