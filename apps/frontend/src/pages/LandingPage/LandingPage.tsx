import { Layout } from 'antd';
import {
  Features,
  HeroSection,
  Navbar,
  Promote,
  Testimonials,
} from './components';
import { Category } from './components/Category/Category';

const LandingPage = () => {
  return (
    <Layout className="bg-light-bg">
      <Navbar />
      <HeroSection />
      <Category />
      <Features />
      <Testimonials />
      <Promote />
      {/* <Footer className="text-center bg-gray-200">
        ©2024 Course Name. All Rights Reserved.
      </Footer> */}
    </Layout>
  );
};
export { LandingPage };
