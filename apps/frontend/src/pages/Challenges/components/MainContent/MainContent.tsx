import { Flex } from 'antd';
import { ChallengeCard } from './components';

const MainContent = () => {
  return (
    <Flex vertical gap={16} className="mt-5">
      <h1 className="text-2xl font-semibold">Challenge List</h1>
      <ChallengeCard />
    </Flex>
  );
};
export { MainContent };
