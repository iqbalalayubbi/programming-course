import { appRoute } from '@/enums';
import { Button, Flex } from 'antd';
import { Link } from 'react-router';

const Promote = () => {
  return (
    <Flex className="mt-40" align="center" vertical>
      <h1 className="font-bold text-4xl leading-normal">
        So, What You Are Waiting For
      </h1>
      <span className="italic text-center text-gray-third">
        “From community to community”
      </span>
      <Link to={appRoute.REGISTER} className="w-1/3">
        <Button type="primary" shape="round" className=" w-full mt-10">
          Join Now
        </Button>
      </Link>
    </Flex>
  );
};
export { Promote };
