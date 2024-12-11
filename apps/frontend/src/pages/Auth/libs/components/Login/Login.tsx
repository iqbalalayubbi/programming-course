import { authApi } from '@/api';
import {
  Button,
  Flex,
  Form,
  Input,
  Typography,
  Link,
  CustomLoading,
  ToastContainer,
  toast,
} from '@/components';
import { useParams, useQuery } from '@/hooks';

const { Title, Text, Link: TextLink } = Typography;

const Login = () => {
  const { token } = useParams();
  const verifyPopup = () => toast.success('Your account already activated');

  const { isLoading } = useQuery({
    queryKey: ['verifyEmail'],
    queryFn: async () => {
      if (token) {
        const response = await authApi.verifyEmail(token);
        verifyPopup();
        return response;
      }
    },
  });

  return (
    <Flex vertical className="w-2/3 p-10 rounded-md">
      <ToastContainer position="top-center" />
      <CustomLoading isLoading={isLoading} />
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
