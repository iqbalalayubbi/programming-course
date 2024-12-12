import { AuthApi } from './authApi';
import { ProfileApi } from './profileApi';
import { CourseApi } from './courseApi';
import { StudentCourseApi } from './studentCourseApi';

const authApi = new AuthApi();
const profileApi = new ProfileApi();
const courseApi = new CourseApi();
const studentCourseApi = new StudentCourseApi();

export { authApi, profileApi, courseApi, studentCourseApi };
