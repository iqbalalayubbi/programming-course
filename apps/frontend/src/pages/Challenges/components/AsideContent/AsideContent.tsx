import { Button, Flex } from '@/components';
import { OutputCode, UserCard } from './components';

const AsideContent = () => {
  return (
    <Flex vertical align="center" gap={8} className="mt-5 w-full px-10">
      <h1 className="text-2xl font-semibold">HALL OF FAME</h1>
      <UserCard />
      <UserCard />
      <Flex gap={8} vertical className="mt-5 w-80" align="stretch">
        <strong>Ouput</strong>
        <OutputCode />
        <Button type="primary" className="w-full mt-10">
          Submit Code
        </Button>
      </Flex>
    </Flex>
  );
};

export { AsideContent };
