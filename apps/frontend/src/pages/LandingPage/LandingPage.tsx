import { Layout } from 'antd';
import { HeroSection, Navbar } from './components';
import { Category } from './components/Category/Category';

const LandingPage = () => {
  return (
    <Layout className="bg-light-bg">
      <Navbar />
      <HeroSection />
      <Category />
      {/* <Footer className="text-center bg-gray-200">
        ©2024 Course Name. All Rights Reserved.
      </Footer> */}
    </Layout>
  );
};
export { LandingPage };
