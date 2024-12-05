import { thumbnailCourse } from '@/assets';
import { Avatar, Flex, Typography } from 'antd';

const { Link } = Typography;
const TaskCard = () => {
  return (
    <Flex
      align="center"
      justify="space-between"
      className="shadow-[0px_0px_5px_0px_#e2e8f0] px-3 py-2 rounded-md w-[90%]"
    >
      <Flex align="center" justify="space-between" className="w-full">
        <Avatar size={30} icon={<img src={thumbnailCourse} />} />
        <Flex gap={4} vertical>
          <h1 className="text-base font-semibold w-40 text-ellipsis overflow-hidden">
            Javascript Object
          </h1>
          <span className="text-gray-third">27 Mei 2024 12:00</span>
        </Flex>
        <Link type="secondary">Detail</Link>
      </Flex>
    </Flex>
  );
};

export { TaskCard };
