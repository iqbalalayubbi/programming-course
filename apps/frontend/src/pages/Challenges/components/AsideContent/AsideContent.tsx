import { Button, Flex } from '@/components';
import { OutputCode } from './components';
import { useParams } from 'react-router';

const AsideContent = () => {
  const { challengeId } = useParams();

  if (challengeId) {
    return (
      <Flex vertical align="center" gap={8} className="mt-5 w-full px-10">
        <Flex gap={8} vertical className="mt-5 w-80" align="stretch">
          <strong>Ouput</strong>
          <OutputCode />
          <Button type="primary" className="w-full mt-10">
            Submit Code
          </Button>
        </Flex>
      </Flex>
    );
  }

  return (
    <Flex align="center" className="h-screen">
      <p className="text-gray-third">Select Your Challange</p>
    </Flex>
  );
};

export { AsideContent };
