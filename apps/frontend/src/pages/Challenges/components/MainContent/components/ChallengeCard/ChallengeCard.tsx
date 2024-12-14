import { Button, Flex } from 'antd';

const ChallengeCard = () => {
  return (
    <Flex
      justify="space-between"
      className="border shadow-md rounded-lg px-10 py-5"
    >
      <h1 className="text-2xl font-semibold">Spent Last Time With No Change</h1>
      <Button type="primary">Solve This</Button>
    </Flex>
  );
};

export { ChallengeCard };
