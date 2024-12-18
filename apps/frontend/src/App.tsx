import {
  Auth,
  Challenges,
  CourseManagement,
  Courses,
  Dashboard,
  DetailCourse,
  LandingPage,
  MentorCourses,
  MentorManagement,
  NotFound,
  Profile,
  ResetPassword,
  StudyRoom,
  VerifyEmail,
  VerifyOTP,
} from '@/pages';
import { Routes, Route } from '@/components';
import { MainLayout } from '@/layouts';
import { appRoute } from '@/enums';
import { Notes } from './pages/Notes/Notes';

const App = () => {
  return (
    <Routes>
      <Route path={appRoute.LOGIN} element={<Auth pageName="login" />} />
      <Route
        path={appRoute.LOGIN_VERIFY_TOKEN}
        element={<Auth pageName="login" />}
      />
      <Route path={appRoute.REGISTER} element={<Auth pageName="register" />} />
      <Route
        path={appRoute.FORGOT_PASSWORD}
        element={<Auth pageName="forgot-password" />}
      />
      <Route path={appRoute.VERIFY_OTP} element={<VerifyOTP />} />
      <Route path={appRoute.VERIFY_EMAIL} element={<VerifyEmail />} />
      <Route path={appRoute.RESET_PASSWORD} element={<ResetPassword />} />
      <Route path="/" element={<LandingPage />} />
      <Route path={appRoute.MAIN} element={<MainLayout />}>
        <Route path={`${appRoute.DASHBOARD}`} element={<Dashboard />} />
        <Route path={appRoute.COURSES} element={<Courses />} />
        <Route path={appRoute.COURSE_DETAIL} element={<DetailCourse />} />
        <Route path={appRoute.STUDY_ROOM} element={<StudyRoom />} />
        <Route path={appRoute.PROFILE} element={<Profile />} />
        <Route
          path={appRoute.MENTOR_MANAGEMENT}
          element={<MentorManagement />}
        />
        <Route path={appRoute.MENTOR_COURSES} element={<MentorCourses />} />
        <Route
          path={`${appRoute.COURSE_MANAGEMENT_ID}`}
          element={<CourseManagement />}
        />
        <Route path={`${appRoute.NOTES}`} element={<Notes />} />
        <Route path={`${appRoute.NOTE_DETAIL}`} element={<Notes />} />
        <Route path={`${appRoute.CHALLENGES}`} element={<Challenges />} />
        <Route
          path={`${appRoute.CHALLENGES_DETAIL}`}
          element={<Challenges />}
        />
      </Route>
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

export default App;
