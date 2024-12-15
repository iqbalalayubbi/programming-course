import { appRoute } from '@/enums';
import { Button, Flex } from 'antd';
import { Link } from 'react-router';

const ChallengeCard = () => {
  return (
    <Flex
      justify="space-between"
      className="border shadow-md rounded-lg px-10 py-5"
    >
      <h1 className="text-2xl font-semibold">Spent Last Time With No Change</h1>
      <Link to={`${appRoute.CHALLENGES}/1`}>
        <Button type="primary">Solve This</Button>
      </Link>
    </Flex>
  );
};

export { ChallengeCard };
