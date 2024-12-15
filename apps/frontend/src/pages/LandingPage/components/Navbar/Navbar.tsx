import { Layout, Button, Flex } from 'antd';
const { Header } = Layout;

const Navbar = () => {
  return (
    <Header className="bg-light-bg border-b shadow-sm">
      <Flex align="center" justify="space-between">
        <h1>Logo</h1>
        <Flex align="center" gap={32}>
          <Flex align="center" gap={16}>
            <span>Category</span>
            <span>Features</span>
          </Flex>
          <Flex align="center" gap={16}>
            <Button type="default">Login</Button>
            <Button type="primary">Register</Button>
          </Flex>
        </Flex>
      </Flex>
    </Header>
  );
};

export { Navbar };
