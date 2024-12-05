import { Layout } from 'antd';
import { Sidebar } from '@/components/Sidebar/Sidebar';
import { Outlet } from 'react-router';

const { Content } = Layout;

const MainLayout = () => {
  return (
    <Layout className="min-h-screen">
      <Sidebar />
      <Layout className="bg-gray-100">
        <Content>
          <Outlet />
        </Content>
      </Layout>
    </Layout>
  );
};

export { MainLayout };
