import { Layout } from 'antd';
import { Advertisement } from './components';

const { Content } = Layout;

const MainContent = () => {
  return (
    <Content className="w-2/3 mx-8 mt-5">
      <Advertisement />
    </Content>
  );
};

export { MainContent };
