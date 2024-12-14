import { Flex } from 'antd';
import { UserCard } from './components';

const AsideContent = () => {
  return (
    <Flex vertical gap={8} className="mt-5 w-full px-10">
      <h1 className="text-2xl font-semibold">HALL OF FAME</h1>
      <UserCard />
      <UserCard />
    </Flex>
  );
};

export { AsideContent };
