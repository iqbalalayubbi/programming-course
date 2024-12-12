import { UserStore, useUser } from '@/stores';
import { AxiosError, AxiosResponse } from 'axios';
import { FormatResponseType } from '@/types';
import { ResponseApiType } from 'common';
import { useQuery } from '@tanstack/react-query';
import { profileApi } from '@/api';
import { useCallback, useEffect } from 'react';

const useUserData = () => {
  const { setUserData, ...userStore } = useUser();

  const getUserData = useCallback(
    (result: FormatResponseType | AxiosError) => {
      if (result instanceof AxiosError) {
        return null;
      }

      const response = result as unknown as AxiosResponse;
      const responseData = response.data as ResponseApiType;
      const user = responseData.data?.user as UserStore;
      setUserData(user);
    },
    [setUserData],
  );

  const { data: profileResponse, ...queryStates } = useQuery({
    queryKey: ['profile'],
    queryFn: async () => {
      const response = await profileApi.getUser();
      return response;
    },
  });

  useEffect(() => {
    if (profileResponse) {
      getUserData(profileResponse);
    }
  }, [profileResponse, getUserData]);

  return {
    ...userStore,
    ...queryStates,
  };
};

export { useUserData };
