import { sidebarAvatar } from '@/assets';
import { useCourse } from '@/stores';
import { Avatar, Flex } from 'antd';

const MentorProfile = () => {
  const { course } = useCourse();
  return (
    <Flex gap={16} vertical>
      <Avatar size={100} icon={<img src={sidebarAvatar} alt="avatar" />} />
      <Flex align="center" vertical>
        <h3 className="text-xl text-dark-text">Steve Smith</h3>
        <span className="text-gray-third font-semibold">
          @{course.mentor_username}
        </span>
      </Flex>
    </Flex>
  );
};

export { MentorProfile };
