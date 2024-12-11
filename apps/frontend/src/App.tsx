import {
  Auth,
  Courses,
  Dashboard,
  DetailCourse,
  Profile,
  ResetPassword,
  StudyRoom,
  VerifyOTP,
} from '@/pages';
import { Routes, Route } from '@/components';
import { MainLayout } from '@/layouts';
import { appRoute } from '@/enums';

const App = () => {
  return (
    <Routes>
      <Route path={appRoute.LOGIN} element={<Auth pageName="login" />} />
      <Route path={appRoute.REGISTER} element={<Auth pageName="register" />} />
      <Route
        path={appRoute.FORGOT_PASSWORD}
        element={<Auth pageName="forgot-password" />}
      />
      <Route path={appRoute.VERIFY_OTP} element={<VerifyOTP />} />
      <Route path={appRoute.RESET_PASSWORD} element={<ResetPassword />} />
      <Route path={appRoute.MAIN} element={<MainLayout />}>
        <Route index element={<Dashboard />} />
        <Route path={appRoute.COURSES} element={<Courses />} />
        <Route path={appRoute.COURSE_DETAIL} element={<DetailCourse />} />
        <Route path={appRoute.STUDY_ROOM} element={<StudyRoom />} />
        <Route path={appRoute.PROFILE} element={<Profile />} />
      </Route>
    </Routes>
  );
};

export default App;
