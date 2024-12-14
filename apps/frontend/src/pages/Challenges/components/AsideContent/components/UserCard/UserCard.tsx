import { sidebarAvatar } from '@/assets';
import { Iconify } from '@/components';
import { colorPalette } from '@/enums';
import { Avatar, Flex } from 'antd';

const UserCard = () => {
  return (
    <Flex
      justify="space-between"
      align="center"
      gap={16}
      className="border-b p-5 shadow-md w-full"
    >
      <Flex gap={16} align="center">
        <Avatar src={sidebarAvatar} />
        <Flex vertical>
          <h3 className="text-2xl text-primary font-bold">800</h3>
          <h5 className="text-gray-third font-bold italic">@steve</h5>
        </Flex>
      </Flex>
      <Iconify
        icon="tabler:star-filled"
        color={colorPalette.SECONDARY}
        fontSize={24}
      />
    </Flex>
  );
};
export { UserCard };
