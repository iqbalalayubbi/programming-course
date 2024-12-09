import { thumbnailExample } from '@/assets';
import { Card, Flex, Rate } from 'antd';

const CourseCard = () => {
  return (
    <Card
      className="shadow-lg w-[24%]"
      cover={<img src={thumbnailExample} />}
      hoverable
    >
      <Flex className="mt-2" vertical>
        <h3 className="font-semibold text-gray-800 text-xl">
          Create your own portfolio
        </h3>
        <p className="text-gray-600 text-sm">
          Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
          sint.
        </p>
      </Flex>
      <Flex className="mt-4" gap={16} vertical>
        <Flex className="space-x-2">
          <span className="bg-yellow-500 text-white px-3 py-1 rounded-full">
            JS
          </span>
          <span className="bg-blue-400 text-white px-3 py-1 rounded-full">
            React
          </span>
          <span className="bg-blue-600 text-white px-3 py-1 rounded-full">
            Tailwind
          </span>
        </Flex>
        <Flex justify="space-between" align="center">
          <span className="text-gray-third text-xs">200 reviews</span>
          <Rate disabled allowHalf defaultValue={4.5} className="text-lg" />
        </Flex>
      </Flex>
    </Card>
  );
};

export { CourseCard };
