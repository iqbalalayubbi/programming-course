import { Flex, Layout } from '@/components';
import { Advertisement, CourseCard } from './components';
import { useCourse } from '@/stores';
import { Link } from 'react-router';
import { appRoute } from '@/enums';
const { Content } = Layout;

const MainContent = () => {
  const { courses } = useCourse();

  return (
    <Content className="mx-8 mt-5 h-screen overflow-auto">
      <Advertisement />
      <h1 className="text-3xl font-bold my-3 mt-10">Your Courses</h1>
      <Flex gap={16} vertical className="h-96 overflow-auto">
        {courses.map((course) => {
          return (
            <Link to={`${appRoute.COURSES}/${course.id}`}>
              <CourseCard id={course.id} title={course.title} key={course.id} />
            </Link>
          );
        })}
      </Flex>
    </Content>
  );
};

export { MainContent };
