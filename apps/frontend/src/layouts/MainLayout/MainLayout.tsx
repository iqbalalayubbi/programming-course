import { Layout } from 'antd';
import { Sidebar } from '@/components/Sidebar/Sidebar';
import { Outlet } from 'react-router';
import { useUserData } from '@/hooks';

const { Content } = Layout;

const MainLayout = () => {
  useUserData();

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
