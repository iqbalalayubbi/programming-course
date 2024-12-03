import { Button, Flex, Form, Input, Typography } from 'antd';
import { Link } from 'react-router';

const { Title, Text, Link: TextLink } = Typography;

const Login = () => {
  return (
    <Flex vertical className="w-2/3 p-10 rounded-md">
      <Title className="text-center">Login</Title>
      <Form layout="vertical">
        <Form.Item label="Email" name="email">
          <Input placeholder="Enter your email" />
        </Form.Item>
        <Form.Item label="Password" name="password">
          <Input.Password placeholder="Enter your password" />
        </Form.Item>
        <Flex gap={16} vertical>
          <Link to="/forgot-password" className="text-end">
            <TextLink underline type="success">
              Forgot password?
            </TextLink>
          </Link>
          <Button type="primary" htmlType="submit">
            Login
          </Button>
          <Text type="secondary" className="text-center">
            Don’t have an account?{' '}
            <Link to="/register">
              <TextLink type="success" underline>
                Register
              </TextLink>
            </Link>
          </Text>
        </Flex>
      </Form>
    </Flex>
  );
};

export { Login };
