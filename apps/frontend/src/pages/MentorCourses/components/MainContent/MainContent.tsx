import { CustomQuill, Flex, Link } from '@/components';
import { appRoute } from '@/enums';
import { useMentorManagement } from '@/stores';
import { ArrowLeftOutlined } from '@ant-design/icons';
import { Button } from 'antd';
import { UploadVideo } from './components';

const MainContent = () => {
  const { newCourseName } = useMentorManagement();

  return (
    <Flex gap={16} vertical className="h-full">
      <Flex align="center" gap={16}>
        <Link to={appRoute.MENTOR_MANAGEMENT}>
          <Button type="text" icon={<ArrowLeftOutlined />} />
        </Link>
        <h1 className="text-3xl font-bold my-5">{newCourseName}</h1>
      </Flex>
      <UploadVideo />
      <CustomQuill children className="flex-1 h-full mt-10" />;
    </Flex>
  );
};

export { MainContent };
