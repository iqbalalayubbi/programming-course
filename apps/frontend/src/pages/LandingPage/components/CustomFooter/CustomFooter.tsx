import { appLogo } from '@/assets';
import { Button, Flex, Layout } from 'antd';

const { Footer } = Layout;

const CustomFooter = () => {
  const scrollToSection = (id: string) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <Footer className="bg-gray-200 text-white py-4 mt-20">
      <div className="container mx-auto flex justify-between items-center">
        <div>
          <h4 className="text-lg font-semibold text-gray-third">Credit</h4>
          <p className="text-md text-black">
            Picture By{' '}
            <a
              href="https://icons8.com/"
              className="text-primary italic underline"
            >
              icons8
            </a>
          </p>
        </div>
        <Flex align="center" gap={16}>
          <Flex align="center" gap={32}>
            <Flex align="center" gap={24}>
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
          </Flex>
        </Flex>
        <img src={appLogo} alt="logo" />
      </div>
    </Footer>
  );
};

export { CustomFooter };
