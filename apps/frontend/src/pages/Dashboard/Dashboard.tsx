import { Flex } from 'antd';
import { AsideContent, MainContent } from './libs/components';

const Dashboard = () => {
  return (
    <Flex className="h-screen">
      <MainContent />
      <AsideContent />
    </Flex>
  );
};

export { Dashboard };
