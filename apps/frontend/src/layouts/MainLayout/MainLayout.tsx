import { Layout } from 'antd';
import { Sidebar } from '@/components/Sidebar/Sidebar';
import { Outlet } from 'react-router';

const { Content } = Layout;

const MainLayout = () => {
  return (
    <Layout className="min-h-screen">
      <Sidebar />
      <Layout>
        <Content className="mx-10">
          <Outlet />
        </Content>
        {/* <Footer style={{ textAlign: 'center' }}>Footer</Footer> */}
      </Layout>
    </Layout>
  );
};

export { MainLayout };
