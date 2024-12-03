import { Button, Flex, Form, Input, Typography } from 'antd';
import { loginIlustration } from '@/assets';

const { Title, Text, Link } = Typography;
const Auth: React.FC = () => {
  return (
    <Flex justify="space-between" className="h-screen bg-b">
      {/* left */}
      <Flex justify="center" align="center" vertical flex={1}>
        <Flex vertical className="w-2/3 p-10 rounded-md">
          <Title className="text-center">Login</Title>
          <Form layout="vertical">
            <Form.Item label="Email" name="email">
              <Input placeholder="Enter your email" />
            </Form.Item>
            <Form.Item label="Password" name="password">
              <Input.Password placeholder="Enter your password" />
            </Form.Item>
          </Form>
          <Flex gap={16} vertical>
            <Link underline type="secondary" className="text-end">
              Forgot password?
            </Link>
            <Button type="primary" htmlType="submit">
              Login
            </Button>
            <Text type="secondary" className="text-center">
              Don’t have an account?{' '}
              <Link type="secondary" underline>
                Register
              </Link>
            </Text>
          </Flex>
        </Flex>
      </Flex>
      {/* right */}
      <Flex
        align="center"
        justify="center"
        vertical
        gap={16}
        flex={1}
        className="bg-yellow-50"
      >
        <h1 className="text-secondary text-6xl font-bold">Welcome back!</h1>
        <img src={loginIlustration} alt="login ilustration" />
      </Flex>
    </Flex>
  );
};

export { Auth };
