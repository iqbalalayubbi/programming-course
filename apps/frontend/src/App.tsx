import { Auth, ResetPassword, VerifyOTP } from '@/pages';
import { Routes, Route } from 'react-router';

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
    </Routes>
  );
};

export default App;
