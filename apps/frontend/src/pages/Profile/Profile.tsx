import { sidebarAvatar } from '@/assets';
import { Tabs, Flex, Avatar, CustomLoading } from '@/components';
import { FormatResponseType, type TabsProps } from '@/types';
import { AccountTab, PersonalTab } from './components';
import { useQuery } from '@/hooks';
import { profileApi } from '@/api';
import { useUser } from '@/stores';
import { AxiosError, AxiosResponse } from 'axios';
import { ResponseApiType } from 'common';

type UserDataType = {
  username: string;
  role: string;
  email?: string;
  surename?: string;
  birthdate?: string;
  country?: string;
  image_id?: number;
  phone_number?: string;
  total_points?: number;
  description?: string;
};

const Profile = () => {
  const userStore = useUser();

  const getUserData = (result: FormatResponseType | AxiosError) => {
    if (result instanceof AxiosError) {
      return null;
    }

    const response = result as unknown as AxiosResponse;
    const responseData = response.data as ResponseApiType;
    const user = responseData.data?.user as UserDataType;
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
    <Flex align="center" justify="center" className="w-full h-full">
      <CustomLoading isLoading={isLoading} />
      <Flex
        align="center"
        justify="center"
        gap={100}
        className="w-3/4 py-10 rounded-md bg-light-bg"
      >
        <Flex vertical align="center">
          <Avatar size={200} icon={<img src={sidebarAvatar} />} />
          <p className="text-center my-3 w-60 italic text-gray-400">
            {userStore.user.description}
          </p>
          <Flex gap={8} vertical>
            <p className="text-gray-third font-semibold">
              @{userStore.user.username}
            </p>
            <span className="bg-yellow-500 text-light-text px-3 py-1 rounded-full uppercase text-center">
              {userStore.user.role}
            </span>
          </Flex>
        </Flex>
        <Tabs defaultActiveKey="2" items={items} className="w-1/3" />
      </Flex>
    </Flex>
  );
};

export { Profile };
