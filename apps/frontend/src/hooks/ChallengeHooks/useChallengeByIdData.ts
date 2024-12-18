import { challengeApi } from '@/api';
import { useChallenge } from '@/stores';
import { getResponseData } from '@/utils';
import { useQuery } from '@tanstack/react-query';
import { useEffect } from 'react';

const useChallengeByIdData = (challengeId: number) => {
  const { setChallenge } = useChallenge();

  const { data: challengeResponse, ...queryStates } = useQuery({
    queryKey: ['get-challenge-by-id'],
    queryFn: async () => {
      const response = await challengeApi.getChallengeById(Number(challengeId));
      return response;
    },
    select(data) {
      const response = getResponseData(data);
      if (response?.data) {
        const challenge = response.data.challenge;
        return challenge;
      }
      return null;
    },
  });

  useEffect(() => {
    if (challengeResponse) {
      setChallenge(challengeResponse);
    }
  }, [challengeResponse, setChallenge]);

  return {
    challengeResponse,
    ...queryStates,
  };
};

export { useChallengeByIdData };
