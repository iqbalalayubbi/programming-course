import {
  CustomQuill,
  Flex,
  Link,
  Button,
  ArrowLeftOutlined,
} from '@/components';
import { appRoute } from '@/enums';
import { useCourseContent, useQuill } from '@/stores';
import { UploadVideo } from './components';
import { useEffect } from 'react';
import { useLocation } from 'react-router';

const MainContent = () => {
  const { courseContent } = useCourseContent();
  const { setValue } = useQuill();
  const location = useLocation();

  useEffect(() => {
    setValue(courseContent.content);
  }, [courseContent.content, setValue, location.search]);

  return (
    <Flex gap={16} vertical className="h-full">
      <Flex align="center" gap={16}>
        <Link to={`${appRoute.COURSE_MANAGEMENT}/${courseContent.course_id}`}>
          <Button type="text" icon={<ArrowLeftOutlined />} />
        </Link>
        <h1 className="text-3xl font-bold my-5">{courseContent.title}</h1>
      </Flex>
      <UploadVideo />
      <CustomQuill children className="h-80 mt-10" />;
    </Flex>
  );
};

export { MainContent };
