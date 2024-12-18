import { Button, Flex } from '@/components';
import { OutputCode, UserCard } from './components';
import { useParams, useQuery, useEffect } from '@/hooks';
import { userApi } from '@/api';
import { getResponseData } from '@/utils';
import { UserStore, useUser } from '@/stores';

const AsideContent = () => {
  const { challengeId } = useParams();
  const { users, setUsersData } = useUser();

  const { data: usersOrder } = useQuery({
    queryKey: ['order-users-by-points'],
    queryFn: async () => {
      const response = await userApi.orderUsersByPoint();
      return response;
    },
    select(result) {
      const response = getResponseData(result);
      if (response?.data) {
        const users = response.data.users as UserStore[];
        return users;
      }
      return null;
    },
  });

  useEffect(() => {
    if (usersOrder) {
      setUsersData(usersOrder);
    }
  }, [usersOrder, setUsersData]);

  if (challengeId) {
    return (
      <Flex vertical align="center" gap={8} className="mt-5 w-full px-10">
        <Flex gap={8} vertical className="mt-5 w-80" align="stretch">
          <strong>Ouput</strong>
          <OutputCode />
          <Button type="primary" className="w-full mt-10">
            Submit Code
          </Button>
        </Flex>
      </Flex>
    );
  }

  return (
    <Flex align="center" className="h-screen w-full px-10" vertical>
      <Flex vertical gap={16} className="w-full mt-10">
        <h1 className="text-2xl font-semibold text-center">
          Current Leaderboards
        </h1>
        {users.map((user) => {
          return (
            <UserCard
              key={user.username}
              username={user.username}
              image_url={user.image_url as string}
              total_point={user.total_point as number}
            />
          );
        })}
      </Flex>
      <p className="text-gray-third mt-20 opacity-50">Select Your Challange</p>
    </Flex>
  );
};

export { AsideContent };
