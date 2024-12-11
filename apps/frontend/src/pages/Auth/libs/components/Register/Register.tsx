import { authApi } from '@/api';
import { Button, Flex, Form, Input, Typography, Link } from '@/components';
import { useMutation } from '@tanstack/react-query';
import { Modal } from 'antd';
import { RegisterPayload } from 'common';
const { Title, Text, Link: TextLink } = Typography;

const Register = () => {
  const [form] = Form.useForm();

  const registerMutation = useMutation({
    mutationKey: ['register'],
    mutationFn: async (data: RegisterPayload) => {
      const result = await authApi.register(data);
      return result;
    },
    onSuccess: (data) => {
      console.log(data);
    },
    onError: (error) => {
      Modal.error({
        title: 'Register Failed',
        content: error.message,
        centered: true,
        width: 500,
      });
      console.log(error);
    },
  });

  const handleSubmit = async () => {
    const fieldsValue = await form.validateFields();
    registerMutation.mutate(fieldsValue);
  };

  return (
    <Flex vertical className="w-2/3 p-10 rounded-md">
      <Title className="text-center">Register</Title>
      <Form form={form} onFinish={handleSubmit} layout="vertical">
        <Form.Item
          label="Username"
          name="username"
          rules={[{ required: true, message: 'Please enter your username!' }]}
        >
          <Input placeholder="Enter your username" />
        </Form.Item>
        <Form.Item
          label="Email"
          name="email"
          rules={[
            { required: true, message: 'Please enter your email!' },
            { type: 'email', message: 'The input is not valid E-mail!' },
          ]}
        >
          <Input placeholder="Enter your email" />
        </Form.Item>

        <Form.Item
          label="Password"
          name="password"
          rules={[{ required: true, message: 'Please enter your password!' }]}
        >
          <Input.Password placeholder="Enter your password" />
        </Form.Item>
        <Form.Item name="role" initialValue="student" hidden></Form.Item>
        <Flex gap={16} vertical>
          <Button
            type="primary"
            htmlType="submit"
            loading={registerMutation.isPending}
          >
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
