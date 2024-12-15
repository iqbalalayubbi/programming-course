import { MainContent } from './libs/components';
import { useDashboardData, useUserData } from '@/hooks';

const Dashboard = () => {
  useUserData();
  useDashboardData();

  return <MainContent />;
};

export { Dashboard };
