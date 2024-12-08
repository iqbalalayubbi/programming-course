import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App';
import { CustomTheme, BrowserRouter } from '@/components';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <CustomTheme>
        <App />
      </CustomTheme>
    </BrowserRouter>
  </StrictMode>,
);
