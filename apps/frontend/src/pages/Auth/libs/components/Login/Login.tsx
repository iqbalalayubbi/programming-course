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
import { appRoute } from '@/enums';
import { useMutation, useNavigate, useParams, useQuery } from '@/hooks';
import { userDataStorage } from '@/services';
import { AxiosError, FormatResponseType } from '@/types';
import { LoginPayload, ResponseApiType } from 'common';

const { Title, Text, Link: TextLink } = Typography;

const Login = () => {
  const { token } = useParams();
  const navigate = useNavigate();

  const [form] = Form.useForm();

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

  const loginMutation = useMutation({
    mutationKey: ['login'],
    mutationFn: async (data: LoginPayload) => {
      const result = await authApi.login(data);
      return result;
    },
    onSuccess: (response) => {
      const formatResponse = response as FormatResponseType;
      const result = formatResponse.data;
      const accessToken = result.data?.accessToken as string;
      userDataStorage.saveUserData({ accessToken });
      navigate(appRoute.MAIN);
    },
    onError: (error) => {
      const formatError = error as AxiosError;
      const errorData = formatError.response?.data as ResponseApiType;
      toast.error(errorData.message);
    },
  });

  const onSubmitForm = (data: LoginPayload) => {
    loginMutation.mutate(data);
  };

  return (
    <Flex vertical className="w-2/3 p-10 rounded-md">
      <ToastContainer position="top-center" />
      <CustomLoading isLoading={isLoading} />
      <Title className="text-center">Login</Title>
      <Form layout="vertical" form={form} onFinish={onSubmitForm}>
        <Form.Item
          label="Email or username"
          name="identifier"
          rules={[
            {
              required: true,
              message: 'Please enter your email or username!',
            },
          ]}
        >
          <Input placeholder="Enter your email" />
        </Form.Item>
        <Form.Item
          label="Password"
          name="password"
          rules={[
            {
              required: true,
              message: 'Please enter your password!',
            },
            {
              min: 6,
              message: 'Password must be at least 6 characters long!',
            },
          ]}
        >
          <Input.Password placeholder="Enter your password" />
        </Form.Item>
        <Flex gap={16} vertical>
          <Link to="/forgot-password" className="text-end">
            <TextLink underline type="success">
              Forgot password?
            </TextLink>
          </Link>
          <Button
            type="primary"
            htmlType="submit"
            loading={loginMutation.isPending}
          >
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
