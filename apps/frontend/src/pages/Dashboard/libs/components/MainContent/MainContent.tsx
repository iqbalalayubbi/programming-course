import { Flex, Layout } from '@/components';
import { Advertisement, CourseCard } from './components';
import { useCourse } from '@/stores';
const { Content } = Layout;

const MainContent = () => {
  const { courses } = useCourse();

  return (
    <Content className="w-2/3 mx-8 mt-5">
      <Advertisement />
      <h1 className="text-3xl font-bold my-3">Statistics</h1>
      <Flex>
        <Content>Course Statistik</Content>
        <Content>Favorite Tech</Content>
        <Content>Total Stars</Content>
      </Flex>
      <h1 className="text-3xl font-bold my-3">Your Courses</h1>
      <Flex gap={16} vertical>
        {courses.map((course) => {
          return (
            <CourseCard id={course.id} title={course.title} key={course.id} />
          );
        })}
      </Flex>
    </Content>
  );
};

export { MainContent };
