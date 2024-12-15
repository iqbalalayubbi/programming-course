import { Flex } from '@/components';
import { AsideContent, MainContent } from './components';
import { useParams, useDetailCourseData, useStudentCoursesData } from '@/hooks';

const DetailCourse = () => {
  const { id } = useParams();
  useDetailCourseData(Number(id));
  useStudentCoursesData();

  return (
    <Flex className="h-screen overflow-auto sm:h-full sm:flex-row flex-col">
      <MainContent />
      <AsideContent />
    </Flex>
  );
};

export { DetailCourse };
