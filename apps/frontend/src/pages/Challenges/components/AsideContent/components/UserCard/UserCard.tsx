import { Iconify } from '@/components';
import { colorPalette } from '@/enums';
import { getUsername } from '@/utils';
import { Avatar, Flex } from 'antd';

type Properties = {
  username: string;
  image_url: string;
  total_point: number;
};

const UserCard = ({ username, image_url, total_point }: Properties) => {
  const myUsername = getUsername();

  return (
    <Flex
      className={`border rounded-lg px-3 py-3 w-full shadow-sm ${myUsername === username ? 'bg-slate-100' : 'bg-light-bg '}`}
      justify="space-between"
      align="center"
    >
      <Flex align="center">
        <Avatar src={image_url} shape="circle" />
        <span className="ml-3 text-gray-third">
          @{username}{' '}
          {myUsername === username && (
            <span className="font-semibold text-primary">(You)</span>
          )}{' '}
        </span>
      </Flex>
      <Flex gap={8} align="center">
        <span className="font-bold ml-3 text-xl text-secondary">
          {total_point}
        </span>
        <Iconify
          icon="material-symbols:stars-rounded"
          color={colorPalette.SECONDARY}
          fontSize={30}
        />
      </Flex>
    </Flex>
  );
};
export { UserCard };
