import { Button, Flex } from 'antd';

const Promote = () => {
  return (
    <Flex className="mt-40" align="center" vertical>
      <h1 className="font-bold text-4xl leading-normal">
        So, What You Are Waiting For
      </h1>
      <span className="italic text-center text-gray-third">
        “From community to community”
      </span>
      <Button type="primary" shape="round" className=" w-1/3 mt-10">
        Join Now
      </Button>
    </Flex>
  );
};
export { Promote };
