import { sidebarAvatar } from '@/assets';
import { Avatar, Flex } from 'antd';

const MentorProfile = () => {
  return (
    <Flex gap={16} vertical>
      <Avatar size={100} icon={<img src={sidebarAvatar} alt="avatar" />} />
      <Flex align="center" vertical>
        <h3 className="text-xl text-dark-text">Steve Smith</h3>
        <span className="text-gray-third font-semibold">@steve_smith</span>
      </Flex>
    </Flex>
  );
};

export { MentorProfile };
