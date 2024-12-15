import { ArrowLeftOutlined, CustomQuill } from '@/components';
import { appRoute } from '@/enums';
import { Button, Flex } from 'antd';
import { Link } from 'react-router';

const DetailNote = () => {
  return (
    <Flex className="w-full px-10 mt-10 h-full" gap={16} vertical>
      <Flex align="center" gap={16}>
        <Link to={appRoute.NOTES}>
          <Button type="text" icon={<ArrowLeftOutlined />} />
        </Link>
        <h1 className="text-2xl font-semibold">Your Title Here</h1>
      </Flex>
      <CustomQuill children className="w-full h-3/4" />
    </Flex>
  );
};
export { DetailNote };
