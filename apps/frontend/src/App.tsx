import { Auth } from './pages/Auth/Auth';
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
    </Routes>
  );
};

export default App;
