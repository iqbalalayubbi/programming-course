import { UserStore, useUser } from '@/stores';
import { useQuery } from '@tanstack/react-query';
import { profileApi } from '@/api';
import { useEffect } from 'react';
import { getResponseData } from '@/utils';

const useUserData = () => {
  const { setUserData, ...userStore } = useUser();

  const { data: userProfile, ...queryStates } = useQuery({
    queryKey: ['profile'],
    queryFn: async () => {
      const response = await profileApi.getUser();
      return response;
    },
    select(result) {
      const response = getResponseData(result);
      if (response?.data) {
        const user = response.data.user as UserStore;
        return user;
      }
      return null;
    },
  });

  useEffect(() => {
    if (userProfile) {
      setUserData(userProfile);
    }
  }, [userProfile, setUserData]);

  return {
    ...userStore,
    ...queryStates,
  };
};

export { useUserData };
