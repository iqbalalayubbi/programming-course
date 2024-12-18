import { Avatar, Button, Flex, Iconify } from '@/components';
import { OutputCode } from './components';
import { useParams, useQuery, useEffect } from '@/hooks';
import { userApi } from '@/api';
import { getResponseData } from '@/utils';
import { UserStore, useUser } from '@/stores';
import { colorPalette } from '@/enums';

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
          // return <span>{user.username}</span>;
          return (
            <Flex
              className="border rounded-lg px-3 py-3 w-full bg-light-bg shadow-sm"
              justify="space-between"
              align="center"
            >
              <Flex align="center">
                <Avatar src={user.image_url} shape="circle" />
                <span className="ml-3 text-gray-third">@{user.username}</span>
              </Flex>
              <Flex gap={8} align="center">
                <span className="font-bold ml-3 text-xl text-secondary">
                  {user.total_point}
                </span>
                <Iconify
                  icon="material-symbols:stars-rounded"
                  color={colorPalette.SECONDARY}
                  fontSize={30}
                />
              </Flex>
            </Flex>
          );
        })}
      </Flex>
      <p className="text-gray-third mt-20 opacity-50">Select Your Challange</p>
    </Flex>
  );
};

export { AsideContent };
