import { verifyOtpIllustration } from '@/assets';
import { Button, Flex, Typography } from '@/components';

const { Title, Text } = Typography;

const VerifyEmail = () => {
  return (
    <Flex align="center" gap={24} vertical className="h-screen">
      <img
        src={verifyOtpIllustration}
        alt="otp-illustration"
        width={300}
        className="mt-20 mb-10"
      />
      <Flex align="center" vertical>
        <Title className="text-center">Verify Your Email</Title>
        <Text className="text-center text-lg font-medium w-3/4">
          A verification link has been sent to your email. Please check your
          inbox and follow the instruction
        </Text>
      </Flex>
      <Flex justify="center" className="w-full">
        <Button type="primary" htmlType="submit" className="w-1/4 mt-5">
          Resend Email
        </Button>
      </Flex>
    </Flex>
  );
};

export { VerifyEmail };
