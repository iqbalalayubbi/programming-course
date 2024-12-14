import { Avatar, Button, Flex } from 'antd';

type Properties = {
  username: string;
  surename?: string;
  imageUrl?: string;
};

const StudentCard = ({ username, surename, imageUrl }: Properties) => {
  return (
    <Flex
      align="center"
      gap={16}
      className="py-2 px-5 rounded-lg shadow-md border border-gray-200 w-full"
      justify="space-between"
    >
      <Flex align="center" gap={8}>
        <Avatar size={40} icon={<img src={imageUrl} alt="avatar" />} />
        <Flex gap={4} vertical>
          <h3 className="text-lg font-bold text-gray-third">{surename}</h3>
          <span className="text-gray-600">@{username}</span>
        </Flex>
      </Flex>
      <Button danger type="primary">
        Remove
      </Button>
    </Flex>
  );
};

export { StudentCard };
