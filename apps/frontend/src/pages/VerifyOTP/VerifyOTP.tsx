import { verifyOtpIllustration } from '@/assets';
import { Button, Flex, Form, Input, Typography } from '@/components';

const { Title, Text, Link } = Typography;

const VerifyOTP = () => {
  return (
    <Flex align="center" gap={24} vertical className="h-screen">
      <img
        src={verifyOtpIllustration}
        alt="otp-illustration"
        width={300}
        className="mt-20 mb-10"
      />
      <Flex align="center" vertical>
        <Title className="text-center">Enter Your Code</Title>
        <Text className="text-center -mt-5">
          We already send the code to{' '}
          <Link type="success">smith.46@gmail.com</Link>
        </Text>
      </Flex>
      <Form>
        <Form.Item name="otp">
          <Input.OTP size="large" />
        </Form.Item>
        <Button type="primary" htmlType="submit" className="w-full mt-5">
          Verify
        </Button>
      </Form>
      <Link type="success" underline className="text-center">
        Resend OTP
      </Link>
    </Flex>
  );
};

export { VerifyOTP };
