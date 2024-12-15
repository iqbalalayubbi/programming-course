import { appLogo } from '@/assets';
import { appRoute } from '@/enums';
import { UpOutlined } from '@ant-design/icons';
import { Layout, Button, Flex, FloatButton } from 'antd';
import { Link } from 'react-router';
const { Header } = Layout;

const Navbar = () => {
  const scrollToSection = (id: string) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <Header className="bg-light-bg border-b shadow-sm" id="navbar">
      <Flex align="center" justify="space-between">
        <img src={appLogo} alt="" />
        <Flex align="center" gap={32}>
          <Flex align="center" gap={16}>
            <Button
              type="link"
              onClick={() => scrollToSection('category')}
              className="text-black"
            >
              Category
            </Button>
            <Button
              type="link"
              onClick={() => scrollToSection('features')}
              className="text-black"
            >
              Features
            </Button>
            <Button
              type="link"
              onClick={() => scrollToSection('testimonials')}
              className="text-black"
            >
              Testimonials
            </Button>
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
      <FloatButton
        icon={<UpOutlined />}
        onClick={() => scrollToSection('navbar')}
        tooltip="Back to top"
        type="default"
        style={{ insetInlineEnd: 64 }}
      />
    </Header>
  );
};

export { Navbar };
