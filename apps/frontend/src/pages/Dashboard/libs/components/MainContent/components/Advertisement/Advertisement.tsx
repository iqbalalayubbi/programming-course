import { advertisement } from '@/assets';
import { appRoute } from '@/enums';
import { Button, Flex } from 'antd';
import { Link } from 'react-router';

const Advertisement = () => {
  return (
    <Flex
      align="center"
      justify="space-between"
      className="p-10 bg-white rounded-md shadow-sm flex-col-reverse sm:flex-row gap-6 sm:gap-0"
    >
      <Flex gap={16} vertical className="w-full sm:w-1/2">
        <Flex gap={8} vertical>
          <h1 className="font-bold text-2xl text-center sm:text-start">
            Learn Something To Get More{' '}
          </h1>
          <p className="text-lg text-center sm:text-start text-gray-third">
            Nothing in life is to be feared, it is only to be understood. Now is
            the time to understand more, so that we may fear less.{' '}
            <span className="text-gray-third italic opacity-50">
              "Marie Curie"
            </span>
          </p>
        </Flex>
        <Link to={appRoute.COURSES}>
          <Button type="primary" className="sm:w-1/2 w-full">
            Explore Course
          </Button>
        </Link>
      </Flex>
      <img src={advertisement} alt="advertisement" />
    </Flex>
  );
};

export { Advertisement };
