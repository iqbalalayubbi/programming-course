import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App';
import { CustomTheme, BrowserRouter } from '@/components';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

const queryClient = new QueryClient();

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <CustomTheme>
        <QueryClientProvider client={queryClient}>
          <App />
        </QueryClientProvider>
      </CustomTheme>
    </BrowserRouter>
  </StrictMode>,
);
