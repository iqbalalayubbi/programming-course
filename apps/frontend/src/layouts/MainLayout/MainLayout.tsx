import { Layout } from 'antd';
import { Sidebar } from '@/components/Sidebar/Sidebar';
import { Outlet } from 'react-router';
import { UserStore, useUser } from '@/stores';
import { AxiosError, AxiosResponse } from 'axios';
import { FormatResponseType } from '@/types';
import { ResponseApiType } from 'common';
import { useQuery } from '@tanstack/react-query';
import { profileApi } from '@/api';

const { Content } = Layout;

const MainLayout = () => {
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

  useQuery({
    queryKey: ['profile'],
    queryFn: async () => {
      const response = await profileApi.getUser();
      return response;
    },
    select: (response) => getUserData(response),
  });

  return (
    <Layout className="min-h-screen">
      <Sidebar />
      <Layout className="bg-gray-100">
        <Content>
          <Outlet />
        </Content>
      </Layout>
    </Layout>
  );
};

export { MainLayout };
