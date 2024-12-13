import { AuthApi } from './authApi';
import { ProfileApi } from './profileApi';
import { CourseApi } from './courseApi';
import { StudentCourseApi } from './studentCourseApi';
import { DashboardApi } from './dashboardApi';

const authApi = new AuthApi();
const profileApi = new ProfileApi();
const courseApi = new CourseApi();
const studentCourseApi = new StudentCourseApi();
const dashboardApi = new DashboardApi();

export { authApi, profileApi, courseApi, studentCourseApi, dashboardApi };
