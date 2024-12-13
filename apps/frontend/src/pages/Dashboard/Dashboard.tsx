import { Flex } from 'antd';
import { AsideContent, MainContent } from './libs/components';
import { useDashboardData, useUserData } from '@/hooks';

const Dashboard = () => {
  useUserData();
  useDashboardData();

  return (
    <Flex className="h-screen">
      <MainContent />
      <AsideContent />
    </Flex>
  );
};

export { Dashboard };
