import { appLogo } from '@/assets';
import { Iconify } from '@/components';
import { appRoute } from '@/enums';
import { UpOutlined } from '@ant-design/icons';
import { Layout, Button, Flex, FloatButton } from 'antd';
import { useState } from 'react';
import { Link } from 'react-router';
const { Header } = Layout;

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <Header className="bg-light-bg border-b shadow-sm z-20" id="navbar">
      <div className="flex items-center justify-between">
        <img src={appLogo} alt="Logo" className="h-10" />
        {/* nav laptop */}
        <Flex align="center" className="hidden md:flex gap-8 md:gap-3">
          <Flex align="center">
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
            <Link to={`${appRoute.REGISTER}?role=mentor`}>
              <Button type="text">Become a Mentor</Button>
            </Link>
            <Link to={appRoute.LOGIN}>
              <Button type="default">Login</Button>
            </Link>
            <Link to={appRoute.REGISTER}>
              <Button type="primary">Register</Button>
            </Link>
          </Flex>
        </Flex>
        <div className="md:hidden">
          <button onClick={() => setIsOpen(!isOpen)} className="text-black">
            {isOpen ? (
              <Iconify icon="ic:round-close" />
            ) : (
              <Iconify icon="charm:menu-hamburger" />
            )}
          </button>
        </div>
      </div>
      {/* nav mobile */}
      {isOpen && (
        <Flex vertical className="md:hidden bg-white shadow-lg p-4">
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
          <Flex vertical>
            <Link to={appRoute.LOGIN}>
              <Button type="default" className="w-full">
                Login
              </Button>
            </Link>
            <Link to={appRoute.REGISTER}>
              <Button type="primary" className="w-full">
                Register
              </Button>
            </Link>
          </Flex>
        </Flex>
      )}
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
