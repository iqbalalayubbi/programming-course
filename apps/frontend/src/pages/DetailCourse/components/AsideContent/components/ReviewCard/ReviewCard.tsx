import { sidebarAvatar } from '@/assets';
import { Avatar, Flex, Rate } from 'antd';

const ReviewCard = () => {
  return (
    <Flex
      align="center"
      gap={16}
      className="p-2 rounded-lg shadow-md border border-gray-200 w-[90%]"
    >
      <Avatar size={40} icon={<img src={sidebarAvatar} alt="avatar" />} />
      <Flex gap={4} vertical>
        <h3 className="text-lg font-bold text-gray-third">@wiliam_smith</h3>
        <p className="text-gray-600">Good speaker, Informative, and creative</p>
        <Rate className="text-lg" disabled allowHalf defaultValue={4.5} />
      </Flex>
    </Flex>
  );
};

export { ReviewCard };
