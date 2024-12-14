import { Button, Flex } from 'antd';
import { StudentCard } from './components';
import { useNavigate, useParams } from 'react-router';
import { appRoute } from '@/enums';

const AsideContent = () => {
  const { courseId } = useParams();
  const navigate = useNavigate();

  return (
    <Flex className="w-full px-5" vertical>
      <h1 className="text-2xl font-bold my-5">List of Students</h1>
      <Flex gap={8} vertical className="w-full mb-5">
        <StudentCard children />
      </Flex>
      <Button
        type="primary"
        onClick={() =>
          navigate(`${appRoute.MENTOR_COURSES}?page=1&course=${courseId}`)
        }
      >
        Edit Course
      </Button>
    </Flex>
  );
};

export { AsideContent };
