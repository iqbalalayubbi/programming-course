import { Layout } from 'antd';
import { Sidebar } from '@/components/Sidebar/Sidebar';
import { Outlet } from 'react-router';

const { Content, Footer } = Layout;

const MainLayout = () => {
  return (
    <Layout style={{ minHeight: '100vh' }}>
      <Sidebar />
      <Layout>
        <Content style={{ margin: '16px' }}>
          <Outlet />
        </Content>
        <Footer style={{ textAlign: 'center' }}>Footer</Footer>
      </Layout>
    </Layout>
  );
};

export { MainLayout };
