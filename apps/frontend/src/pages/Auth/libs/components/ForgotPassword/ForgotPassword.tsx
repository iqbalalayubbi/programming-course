import { Button, Flex, Form, Input, Typography } from 'antd';
import { Link } from 'react-router';

const { Title, Text, Link: TextLink } = Typography;

const ForgotPassword = () => {
  return (
    <Flex align="center" vertical className="w-2/3 p-10 rounded-md">
      <Title className="text-center">Forgot Password</Title>
      <Title level={4} className="text-center">
        Enter your email or username that connect with your account
      </Title>
      <Form layout="vertical" className="mt-10 w-full">
        <Form.Item label="Email or username" name="identifier">
          <Input placeholder="Enter your email or username" />
        </Form.Item>
        <Flex gap={16} vertical className="w-full">
          <Button type="primary" htmlType="submit">
            Reset Password
          </Button>
          <Text type="secondary" className="text-center">
            Back to{' '}
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

export { ForgotPassword };
