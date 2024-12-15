import { appLogo } from '@/assets';
import { Flex, Layout } from 'antd';

const { Footer } = Layout;

const CustomFooter = () => {
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
              <span className="font-semibold text-gray-third">Category</span>
              <span className="font-semibold text-gray-third">Features</span>
              <span className="font-semibold text-gray-third">
                Testimonials
              </span>
            </Flex>
          </Flex>
        </Flex>
        <img src={appLogo} alt="logo" />
      </div>
    </Footer>
  );
};

export { CustomFooter };
