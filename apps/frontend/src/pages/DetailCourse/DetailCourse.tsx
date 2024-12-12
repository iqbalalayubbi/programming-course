import { Flex } from '@/components';
import { AsideContent, MainContent } from './components';
import { useParams, useDetailCourseData, useStudentCoursesData } from '@/hooks';

const DetailCourse = () => {
  const { id } = useParams();
  useDetailCourseData(Number(id));
  useStudentCoursesData();

  return (
    <Flex className="h-full">
      <MainContent />
      <AsideContent />
    </Flex>
  );
};

export { DetailCourse };
