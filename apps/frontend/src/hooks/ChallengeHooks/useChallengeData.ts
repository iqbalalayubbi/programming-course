import { challengeApi, challengeSubmissionApi } from '@/api';
import {
  ChallengeStore,
  ChallengeSubmissionStore,
  useChallenge,
  UserChallengeStore,
} from '@/stores';
import { getResponseData } from '@/utils';
import { useQuery } from '@tanstack/react-query';
import { useCallback, useEffect, useState } from 'react';

const useChallengeData = (username: string) => {
  const { setChallenges } = useChallenge();
  const [userChallenges, setUserChallenges] = useState<UserChallengeStore[]>(
    [],
  );

  const { data: listChallenges, ...listChallengesStates } = useQuery({
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

  const { data: challengeSubmissions, ...challengeSubmissionsStates } =
    useQuery({
      queryKey: ['get-challenge-submission-by-username'],
      queryFn: async () => {
        const response = await challengeSubmissionApi.getByUsername(username);
        return response;
      },
      select(result) {
        const response = getResponseData(result);
        if (response?.data) {
          const challengeSubmissions = response.data
            .challengeSubmissions as ChallengeSubmissionStore[];
          return challengeSubmissions;
        }
        return null;
      },
    });

  const filterChallengesByUsername = useCallback(() => {
    if (listChallenges && challengeSubmissions) {
      const filteredChallenges = listChallenges.map((challenge) => {
        const isSubmitted = challengeSubmissions.find(
          (userChallenge) => userChallenge.challenge_id === challenge.id,
        );

        return {
          id: challenge.id,
          title: challenge.title,
          isSubmitted: isSubmitted ? true : false,
        };
      });

      setUserChallenges(filteredChallenges);
    }
  }, [setUserChallenges, listChallenges, challengeSubmissions]);

  useEffect(() => {
    if (listChallenges) {
      setChallenges(listChallenges);
      filterChallengesByUsername();
    }
  }, [listChallenges, setChallenges, filterChallengesByUsername]);

  return {
    ...listChallengesStates,
    ...challengeSubmissionsStates,
    listChallenges,
    userChallenges,
  };
};

export { useChallengeData };
