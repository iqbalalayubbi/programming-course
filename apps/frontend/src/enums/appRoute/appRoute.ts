const appRoute = {
  LOGIN: '/login',
  LOGIN_VERIFY_TOKEN: '/login/:token',
  REGISTER: '/register',
  FORGOT_PASSWORD: '/forgot-password',
  VERIFY_OTP: '/verify-otp',
  VERIFY_EMAIL: '/verify-email',
  RESET_PASSWORD: '/reset-password',
  MAIN: '/',
  COURSES: '/courses',
  COURSE_DETAIL: '/courses/:id',
  STUDY_ROOM: '/courses/:id/study',
  PROFILE: '/profile',
  MENTOR_MANAGEMENT: '/mentor-management',
  MENTOR_COURSES: '/mentor-courses',
  COURSE_MANAGEMENT: '/course-management',
  COURSE_MANAGEMENT_ID: '/course-management/:courseId',
  UPLOADS: '/uploads',
};

export { appRoute };
