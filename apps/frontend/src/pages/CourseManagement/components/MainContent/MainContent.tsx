import { thumbnailExample } from '@/assets';
import { Link, ReviewCard } from '@/components';
import { appRoute } from '@/enums';
import { ArrowLeftOutlined } from '@ant-design/icons';
import { Button, Flex } from 'antd';

const MainContent = () => {
  return (
    <Flex vertical>
      <Flex align="center" gap={16}>
        <Link to={appRoute.COURSES}>
          <Button type="text" icon={<ArrowLeftOutlined />} />
        </Link>
        <h1 className="text-3xl font-bold my-5">Something Course</h1>
      </Flex>
      <img
        src={thumbnailExample}
        alt="detail course thumbnail image"
        className="w-full rounded-lg mb-5 h-96"
      />
      <Flex vertical gap={8} className="h-64 overflow-auto">
        <ReviewCard />
        <ReviewCard />
        <ReviewCard />
      </Flex>
    </Flex>
  );
};

export { MainContent };
