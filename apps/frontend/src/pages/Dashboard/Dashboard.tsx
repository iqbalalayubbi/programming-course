import { Flex } from 'antd';
import { AsideContent, MainContent } from './libs/components';
import { useUserData } from '@/hooks';

const Dashboard = () => {
  useUserData();

  return (
    <Flex className="h-screen">
      <MainContent />
      <AsideContent />
    </Flex>
  );
};

export { Dashboard };
