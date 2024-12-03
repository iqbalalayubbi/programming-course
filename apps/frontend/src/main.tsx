import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App';
import { CustomTheme } from './components';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <CustomTheme>
      <App />
    </CustomTheme>
  </StrictMode>,
);
