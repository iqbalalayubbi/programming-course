import { useCourse, useCourseContent, useUser } from '@/stores';
import { type TabsProps } from '@/types';
import { useCourseContentData, useEffect } from '@/hooks';
import {
  toast,
  ToastContainer,
  Button,
  Flex,
  Tabs,
  ArrowLeftOutlined,
  Link,
} from '@/components';
import { appRoute } from '@/enums';
import { useLocation, useParams, useSearchParams } from 'react-router';

const MainContent = () => {
  const userStore = useUser();
  const { course } = useCourse();
  const { id } = useParams();
  const { courseContent } = useCourseContent();
  const [queryParameters] = useSearchParams();
  const page = queryParameters.get('page');
  const location = useLocation();

  const { refetchCourseContent } = useCourseContentData(
    Number(id),
    Number(page),
  );

  const items: TabsProps['items'] = [
    {
      key: '1',
      label: 'Contents',
      children: (
        <p dangerouslySetInnerHTML={{ __html: courseContent.content }} />
      ),
    },
    {
      key: '2',
      label: 'Task',
      children: 'Content of Tab Pane 2',
    },
    {
      key: '3',
      label: 'Discussion',
      children: 'Content of Tab Pane 3',
    },
  ];

  useEffect(() => {
    if (userStore.isJoined) {
      toast.success('successfully joined');
    }
  }, [userStore]);

  useEffect(() => {
    refetchCourseContent();
  }, [location.search, refetchCourseContent]);

  return (
    <Flex gap={8} vertical>
      <ToastContainer position="top-center" />
      <Flex align="center" gap={16}>
        <Link to={appRoute.COURSE_DETAIL.replace(':id', String(course.id))}>
          <Button type="text" icon={<ArrowLeftOutlined />} />
        </Link>
        <h1 className="font-bold text-4xl my-5">{course.title}</h1>
      </Flex>
      <Flex justify="center" vertical>
        <video key={courseContent.video_url} width="600" controls>
          <source src={courseContent.video_url} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </Flex>
      <Tabs defaultActiveKey="1" items={items} className="my-5" />
    </Flex>
  );
};

export { MainContent };
