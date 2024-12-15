import { Layout } from 'antd';
import {
  CustomFooter,
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
      <CustomFooter />
    </Layout>
  );
};
export { LandingPage };
