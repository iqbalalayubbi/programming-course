import { appLogo } from '@/assets';
import { appRoute } from '@/enums';
import { Layout, Button, Flex } from 'antd';
import { Link } from 'react-router';
const { Header } = Layout;

const Navbar = () => {
  return (
    <Header className="bg-light-bg border-b shadow-sm">
      <Flex align="center" justify="space-between">
        <img src={appLogo} alt="" />
        <Flex align="center" gap={32}>
          <Flex align="center" gap={16}>
            <span>Category</span>
            <span>Features</span>
            <span>Testimonials</span>
          </Flex>
          <Flex align="center" gap={16}>
            <Link to={appRoute.LOGIN}>
              <Button type="default">Login</Button>
            </Link>
            <Link to={appRoute.REGISTER}>
              <Button type="primary">Register</Button>
            </Link>
          </Flex>
        </Flex>
      </Flex>
    </Header>
  );
};

export { Navbar };
