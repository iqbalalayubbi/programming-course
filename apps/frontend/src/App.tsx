import { Auth, Courses, Dashboard, ResetPassword, VerifyOTP } from '@/pages';
import { Routes, Route } from '@/components';
import { MainLayout } from '@/layouts';

const App = () => {
  return (
    <Routes>
      <Route path="/login" element={<Auth pageName="login" />} />
      <Route path="/register" element={<Auth pageName="register" />} />
      <Route
        path="/forgot-password"
        element={<Auth pageName="forgot-password" />}
      />
      <Route path="/verify-otp" element={<VerifyOTP />} />
      <Route path="/reset-password" element={<ResetPassword />} />
      <Route path="/" element={<MainLayout />}>
        <Route index element={<Dashboard />} />
        <Route path="/courses" element={<Courses />} />
      </Route>
    </Routes>
  );
};

export default App;
