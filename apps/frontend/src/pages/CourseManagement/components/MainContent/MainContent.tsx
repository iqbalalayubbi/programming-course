import { Link, ReviewCard } from '@/components';
import { appRoute } from '@/enums';
import { useDetailCourseData } from '@/hooks';
import { ArrowLeftOutlined } from '@ant-design/icons';
import { Button, Flex } from 'antd';
import { useParams } from 'react-router';

const MainContent = () => {
  const { courseId } = useParams();
  const { course } = useDetailCourseData(Number(courseId));

  return (
    <Flex vertical>
      <Flex align="center" gap={16}>
        <Link to={appRoute.MENTOR_MANAGEMENT}>
          <Button type="text" icon={<ArrowLeftOutlined />} />
        </Link>
        <h1 className="text-3xl font-bold my-5">{course.title}</h1>
      </Flex>
      <img
        src={course.thumbnail_url}
        alt="detail course thumbnail image"
        className="w-full rounded-lg mb-5 h-96"
      />
      <h1 className="mb-5 text-xl font-semibold">Feedback</h1>
      <Flex vertical gap={8} className="h-64 overflow-auto">
        <ReviewCard />
        <ReviewCard />
        <ReviewCard />
      </Flex>
    </Flex>
  );
};

export { MainContent };
