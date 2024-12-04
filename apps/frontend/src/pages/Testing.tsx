import { Layout } from 'antd';
import { Sidebar } from '@/components/Sidebar/Sidebar'; // Pastikan path ini sesuai dengan lokasi file Sidebar

const { Content, Footer } = Layout;

const Testing = () => {
  return (
    <Layout style={{ minHeight: '100vh' }}>
      <Sidebar />
      <Layout>
        <Content style={{ margin: '16px' }}>
          <div style={{ padding: 24, minHeight: 360, background: '#fff' }}>
            Content goes here...
          </div>
        </Content>
        <Footer style={{ textAlign: 'center' }}>Footer</Footer>
      </Layout>
    </Layout>
  );
};

export { Testing };
