import { Flex } from 'antd';
import { AsideContent, MainContent } from './components';

const DetailCourse = () => {
  return (
    <Flex className="h-full">
      <MainContent />
      <AsideContent />
    </Flex>
  );
};

export { DetailCourse };
