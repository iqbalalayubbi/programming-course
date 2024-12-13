import { sidebarAvatar } from '@/assets';
import { Avatar, Button, Flex, FlexProps } from 'antd';

const StudentCard = (props: FlexProps) => {
  return (
    <Flex
      align="center"
      gap={16}
      className="py-2 px-5 rounded-lg shadow-md border border-gray-200 w-full"
      {...props}
      justify="space-between"
    >
      <Flex align="center" gap={8}>
        <Avatar size={40} icon={<img src={sidebarAvatar} alt="avatar" />} />
        <Flex gap={4} vertical>
          <h3 className="text-lg font-bold text-gray-third">Smith William</h3>
          <span className="text-gray-600">@smith123</span>
        </Flex>
      </Flex>
      <Button danger type="primary">
        Remove
      </Button>
    </Flex>
  );
};

export { StudentCard };
