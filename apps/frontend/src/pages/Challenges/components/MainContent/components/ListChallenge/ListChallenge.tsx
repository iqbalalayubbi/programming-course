import { Flex } from 'antd';
import { ChallengeCard } from './components';
import { useChallenge } from '@/stores';
import { useChallengeData } from '@/hooks';

const ListChallenge = () => {
  const { challenges } = useChallenge();

  useChallengeData();

  return (
    <Flex vertical gap={16} className="mt-5">
      <h1 className="text-2xl font-semibold">Challenge List</h1>
      <Flex gap={16} vertical>
        {challenges.map((challenge) => {
          return (
            <ChallengeCard
              key={challenge.id}
              id={Number(challenge.id)}
              title={challenge.title}
            />
          );
        })}
      </Flex>
    </Flex>
  );
};
export { ListChallenge };
