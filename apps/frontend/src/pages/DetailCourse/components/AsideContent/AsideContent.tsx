import { Button, Flex, Rate } from 'antd';
import { MentorProfile, ReviewCard } from './components';

const AsideContent = () => {
  return (
    <Flex className="w-1/2 bg-white h-full" gap={16} align="center" vertical>
      <h1 className="text-4xl font-bold my-5">Mentor</h1>
      <MentorProfile />
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
        <ReviewCard />
        <ReviewCard />
      </Flex>
    </Flex>
  );
};

export { AsideContent };
