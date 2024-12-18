import { thumbnailCourse } from '@/assets';
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
import { useParams } from 'react-router';

const MainContent = () => {
  const userStore = useUser();
  const { course } = useCourse();
  const { id } = useParams();
  const { courseContent } = useCourseContent();

  useCourseContentData(Number(id), 1);

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

  return (
    <Flex gap={8} vertical>
      <ToastContainer position="top-center" />
      <Flex align="center" gap={16}>
        <Link to={appRoute.COURSE_DETAIL.replace(':id', String(course.id))}>
          <Button type="text" icon={<ArrowLeftOutlined />} />
        </Link>
        <h1 className="font-bold text-4xl my-5">{course.title}</h1>
      </Flex>
      <img src={thumbnailCourse} alt="" className="w-full" />
      <Tabs defaultActiveKey="1" items={items} className="my-5" />
    </Flex>
  );
};

export { MainContent };
