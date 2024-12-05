import { sidebarAvatar } from '@/assets';
import { Iconify } from '@/components';
import { Avatar, Flex } from 'antd';

const FriendCard = () => {
  return (
    <Flex
      align="center"
      justify="space-between"
      className="shadow-[0px_0px_5px_0px_#e2e8f0] px-3 py-2 rounded-md w-[90%]"
    >
      <Flex gap={16} align="center">
        <Avatar size={40} icon={<img src={sidebarAvatar} />} />
        <Flex vertical>
          <h3 className="text-xl font-semibold">Steven</h3>
          <span className="text-gray-third">@steven123</span>
        </Flex>
      </Flex>
      <Flex align="center" gap={8}>
        <Iconify icon="material-symbols:stars" color="yellow" fontSize={24} />
        <span className="text-xl font-semibold">150</span>
      </Flex>
    </Flex>
  );
};

export { FriendCard };
