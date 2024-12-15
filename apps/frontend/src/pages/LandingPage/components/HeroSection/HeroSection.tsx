import { ilustationHomepage } from '@/assets';
import { Layout, Button, Flex } from 'antd';
const { Content } = Layout;

const HeroSection = () => {
  return (
    <Content className="p-20 bg-light-bg">
      <Flex justify="space-between">
        <Flex vertical gap={16} justify="center">
          <h1 className="font-bold text-6xl leading-normal">
            Learn Something <br /> To Get More
          </h1>
          <p className="font-medium text-gray-third text-xl w-1/2">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Consectetur, inventore?Lorem ipsum dolor sit amet consectetur
            adipisicing elit. Nihil, ab?
          </p>
          <Button type="primary" shape="round" className="w-1/2 mt-10">
            Start Learning
          </Button>
        </Flex>
        <img src={ilustationHomepage} alt="ilustation" className="w-1/3" />
      </Flex>
    </Content>
  );
};
export { HeroSection };
