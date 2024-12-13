import { Flex } from 'antd';
import { StudentCard } from './components';

const AsideContent = () => {
  return (
    <Flex className="w-full px-5" vertical>
      <h1 className="text-2xl font-bold my-5">List of Students</h1>
      <Flex gap={8} vertical className="w-full">
        <StudentCard children />
      </Flex>
    </Flex>
  );
};

export { AsideContent };
