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

const MainContent = () => {
  const { courseContent } = useCourseContent();
  const { setValue } = useQuill();

  useEffect(() => {
    setValue(courseContent.content);
  }, [courseContent.content, setValue]);

  return (
    <Flex gap={16} vertical className="h-full">
      <Flex align="center" gap={16}>
        <Link to={appRoute.MENTOR_MANAGEMENT}>
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
