import { resetPasswordIllustration } from '@/assets';
import { Button, Flex, Form, Input, Typography } from 'antd';

const { Title, Text } = Typography;

const ResetPassword = () => {
  return (
    <Flex align="center" gap={24} vertical className="h-screen">
      <img
        src={resetPasswordIllustration}
        alt="otp-illustration"
        width={300}
        className="mt-20 mb-10"
      />
      <Flex align="center" vertical>
        <Title className="text-center">Set New Password</Title>
        <Text className="text-center -mt-5">
          Don’t forget to remember your new password again
        </Text>
      </Flex>
      <Form layout="vertical" className="w-1/4">
        <Form.Item label="New Password" name="newPassword">
          <Input placeholder="Enter your new password" />
        </Form.Item>
        <Form.Item label="Confirm Password" name="confirmPassword">
          <Input placeholder="Enter your confirm password" />
        </Form.Item>
        <Button type="primary" htmlType="submit" className="w-full mt-5">
          Reset Password
        </Button>
      </Form>
    </Flex>
  );
};

export { ResetPassword };
