import { advertisement } from '@/assets';
import { Button, Flex } from 'antd';

const Advertisement = () => {
  return (
    <Flex
      align="center"
      justify="space-between"
      className="p-10 bg-white rounded-md shadow-sm"
    >
      <Flex gap={16} vertical className="w-1/2">
        <Flex gap={8} vertical>
          <h1 className="font-bold text-2xl">Learn Something To Get More </h1>
          <p className="text-lg">
            Or kind rest bred with am shed then. In raptures building an
            bringing be. Elderly is detract tedious
          </p>
        </Flex>
        <Button type="primary" className="w-1/2">
          Explore Course
        </Button>
      </Flex>
      <img src={advertisement} alt="advertisement" />
    </Flex>
  );
};

export { Advertisement };
