import { Flex } from 'antd';
import { ChallengeCard } from './components';
import { useChallengeData } from '@/hooks';
import { getUsername } from '@/utils';

const ListChallenge = () => {
  const username = getUsername();
  const { userChallenges } = useChallengeData(username);

  return (
    <Flex vertical gap={16} className="mt-5">
      <h1 className="text-2xl font-semibold">Challenge List</h1>
      <Flex gap={16} vertical>
        {userChallenges.map((challenge) => {
          return (
            <ChallengeCard
              key={challenge.id}
              id={Number(challenge.id)}
              title={challenge.title}
              isSubmitted={challenge.isSubmitted}
            />
          );
        })}
      </Flex>
    </Flex>
  );
};
export { ListChallenge };
