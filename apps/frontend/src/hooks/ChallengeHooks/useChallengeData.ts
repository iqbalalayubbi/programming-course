import { challengeApi } from '@/api';
import { ChallengeStore, useChallenge } from '@/stores';
import { getResponseData } from '@/utils';
import { useQuery } from '@tanstack/react-query';
import { useEffect } from 'react';

const useChallengeData = () => {
  const { setChallenges } = useChallenge();

  const { data, ...queryStates } = useQuery({
    queryKey: ['challenge-list'],
    queryFn: async () => {
      const result = await challengeApi.getChallenges();
      return result;
    },
    select(result) {
      const response = getResponseData(result);
      if (response?.data) {
        const challenges = response.data.challenges as ChallengeStore[];
        return challenges;
      }
      return null;
    },
  });

  useEffect(() => {
    if (data) {
      setChallenges(data);
    }
  }, [data, setChallenges]);

  return {
    ...queryStates,
    data,
  };
};

export { useChallengeData };
