import { appRoute } from '@/enums';
import { Button, Flex } from 'antd';
import { Link } from 'react-router';

type Properties = {
  id: number;
  title: string;
};

const ChallengeCard = ({ id, title }: Properties) => {
  return (
    <Flex
      justify="space-between"
      className="border shadow-md rounded-lg px-10 py-5 flex-col gap-5 sm:gap-0 sm:flex-row"
    >
      <h1 className="text-lg sm:text-2xl font-semibold">{title}</h1>
      <Link to={`${appRoute.CHALLENGES}/${id}`}>
        <Button type="primary">Solve This</Button>
      </Link>
    </Flex>
  );
};

export { ChallengeCard };
