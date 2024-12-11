import { authApi } from '@/api';
import {
  Button,
  Flex,
  Form,
  Input,
  Typography,
  Link,
  ToastContainer,
  toast,
} from '@/components';
import { appRoute } from '@/enums';
import { AxiosError } from '@/types';
import { useMutation, useNavigate } from '@/hooks';
import { RegisterPayload, ResponseApiType } from 'common';

const { Title, Text, Link: TextLink } = Typography;

const Register = () => {
  const [form] = Form.useForm();
  const navigate = useNavigate();

  const registerMutation = useMutation({
    mutationKey: ['register'],
    mutationFn: async (data: RegisterPayload) => {
      const result = await authApi.register(data);
      return result;
    },
    onSuccess: () => {
      navigate(appRoute.VERIFY_EMAIL);
    },
    onError: (error) => {
      const formatError = error as AxiosError;
      const errorData = formatError.response?.data as ResponseApiType;
      toast.error(errorData.message);
    },
  });

  const handleSubmit = async () => {
    const fieldsValue = await form.validateFields();
    registerMutation.mutate(fieldsValue);
  };

  return (
    <Flex vertical className="w-2/3 p-10 rounded-md">
      <ToastContainer position="top-center" />
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
