import { sidebarAvatar } from '@/assets';
import { Avatar, Button, Flex, Rate } from 'antd';

const AsideContent = () => {
  return (
    <Flex className="w-1/2 bg-white h-full" gap={16} align="center" vertical>
      <h1 className="text-4xl font-bold my-5">Mentor</h1>
      <Flex gap={16} vertical>
        <Avatar size={100} icon={<img src={sidebarAvatar} alt="avatar" />} />
        <Flex align="center" vertical>
          <h3 className="text-xl text-dark-text">Steve Smith</h3>
          <span className="text-gray-third font-semibold">@steve_smith</span>
        </Flex>
      </Flex>
      <h1 className="text-dark-text font-bold text-6xl">4.0</h1>
      <Flex align="center" vertical>
        <Rate disabled allowHalf defaultValue={4.5} className="text-lg" />
        <span className="text-gray-third">243 Reviewed</span>
      </Flex>
      <Button type="primary" className="w-3/4">
        Learn Now
      </Button>
      <h1 className="text-2xl font-bold my-5">What they say</h1>
      <Flex className="w-full" align="center" gap={16} vertical>
        <Flex
          align="center"
          gap={16}
          className="p-2 rounded-lg shadow-md border border-gray-200 w-[90%]"
        >
          <Avatar size={40} icon={<img src={sidebarAvatar} alt="avatar" />} />
          <Flex gap={4} vertical>
            <h3 className="text-lg font-bold text-gray-third">@wiliam_smith</h3>
            <p className="text-gray-600">
              Good speaker, Informative, and creative
            </p>
            <Rate className="text-lg" disabled allowHalf defaultValue={4.5} />
          </Flex>
        </Flex>
      </Flex>
    </Flex>
  );
};

export { AsideContent };
