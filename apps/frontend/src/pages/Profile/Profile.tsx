import { Tabs, Flex, CustomLoading } from '@/components';
import { FormatResponseType, type TabsProps } from '@/types';
import { AccountTab, PersonalTab, UserAvatar } from './components';
import { useQuery } from '@/hooks';
import { profileApi } from '@/api';
import { UserStore, useUser } from '@/stores';
import { AxiosError, AxiosResponse } from 'axios';
import { ResponseApiType } from 'common';

const Profile = () => {
  const userStore = useUser();

  const getUserData = (result: FormatResponseType | AxiosError) => {
    if (result instanceof AxiosError) {
      return null;
    }

    const response = result as unknown as AxiosResponse;
    const responseData = response.data as ResponseApiType;
    const user = responseData.data?.user as UserStore;
    userStore.setUserData(user);
  };

  const { isLoading } = useQuery({
    queryKey: ['profile'],
    queryFn: async () => {
      const response = await profileApi.getUser();
      return response;
    },
    select: (response) => getUserData(response),
  });

  const items: TabsProps['items'] = [
    {
      key: '1',
      label: 'Account',
      children: <AccountTab />,
    },
    {
      key: '2',
      label: 'Personal',
      children: <PersonalTab />,
    },
  ];

  return (
    <Flex
      align="center"
      justify="center"
      className="w-full sm:h-full h-screen overflow-auto"
    >
      <CustomLoading isLoading={isLoading} />
      <Flex
        align="center"
        justify="center"
        className="w-3/4 py-10 rounded-md bg-light-bg flex-col gap-5 md:gap-20 md:flex-row"
      >
        <Flex vertical align="center">
          <UserAvatar />
          <p className="text-center my-3 w-60 italic text-gray-400">
            {userStore.user.description}
          </p>
          <Flex gap={8} align="center" vertical>
            <p className="text-gray-third font-semibold text-center">
              @{userStore.user.username}
            </p>
            <span className="bg-yellow-500 text-light-text px-3 py-1 rounded-full uppercase text-center">
              {userStore.user.role}
            </span>
          </Flex>
        </Flex>
        <Tabs defaultActiveKey="2" items={items} className="w-3/4 md:w-1/3" />
      </Flex>
    </Flex>
  );
};

export { Profile };
