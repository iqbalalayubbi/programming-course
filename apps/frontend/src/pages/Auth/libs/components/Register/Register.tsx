import { Button, Flex, Form, Input, Typography } from 'antd';
import { Link } from 'react-router';

const { Title, Text, Link: TextLink } = Typography;

const Register = () => {
  return (
    <Flex vertical className="w-2/3 p-10 rounded-md">
      <Title className="text-center">Register</Title>
      <Form layout="vertical">
        <Form.Item label="Username" name="username">
          <Input placeholder="Enter your username" />
        </Form.Item>
        <Form.Item label="Email" name="email">
          <Input placeholder="Enter your email" />
        </Form.Item>
        <Form.Item label="Password" name="password">
          <Input.Password placeholder="Enter your password" />
        </Form.Item>
        <Flex gap={16} vertical>
          <Button type="primary" htmlType="submit">
            Create Account
          </Button>
          <Text type="secondary" className="text-center">
            Already have an account?{' '}
            <Link to="/login">
              <TextLink type="success" underline>
                Login
              </TextLink>
            </Link>
          </Text>
        </Flex>
      </Form>
    </Flex>
  );
};

export { Register };
