import { Flex, Layout } from 'antd';
import { FriendCard } from './components';

const { Content } = Layout;

const AsideContent = () => {
  return (
    <Content className="bg-light-bg py-3">
      <h1 className="text-2xl font-semibold mx-3 mb-3">Friends</h1>
      <Flex align="center" gap={16} vertical>
        <FriendCard />
        <FriendCard />
      </Flex>
    </Content>
  );
};

export { AsideContent };
