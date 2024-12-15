import { ilustationHomepage } from '@/assets';
import { appRoute } from '@/enums';
import { Layout, Button, Flex } from 'antd';
import { Link } from 'react-router';
const { Content } = Layout;

const HeroSection = () => {
  return (
    <Content className="p-20">
      <Flex justify="space-between">
        <Flex vertical gap={16} justify="center">
          <h1 className="font-bold text-6xl leading-normal">
            Boost Your Study, <br /> With New Journey
          </h1>
          <p className="font-medium text-gray-third text-xl w-1/2">
            Enhance your skills, connect with fellow tech enthusiasts, and
            access valuable resources. Start your learning journey with us
            today!
          </p>
          <Link to={appRoute.REGISTER}>
            <Button type="primary" shape="round" className="w-1/2 mt-10">
              Start Learning
            </Button>
          </Link>
        </Flex>
        <img src={ilustationHomepage} alt="ilustation" className="w-1/2" />
      </Flex>
    </Content>
  );
};
export { HeroSection };
