import { Layout } from 'antd';
import { HeroSection, Navbar } from './components';

const LandingPage = () => {
  return (
    <Layout>
      <Navbar />
      <HeroSection />
      {/* <Footer className="text-center bg-gray-200">
        ©2024 Course Name. All Rights Reserved.
      </Footer> */}
    </Layout>
  );
};
export { LandingPage };
