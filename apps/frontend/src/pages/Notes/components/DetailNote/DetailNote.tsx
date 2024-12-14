import { CustomQuill } from '@/components';
import { Flex } from 'antd';

const DetailNote = () => {
  return (
    <Flex className="w-full px-10 mt-10 h-full" gap={16} vertical>
      <h1 className="text-2xl font-semibold">Your Title Here</h1>
      <CustomQuill children className="w-full h-3/4" />
    </Flex>
  );
};
export { DetailNote };
