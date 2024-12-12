import { Flex, Select } from '@/components';
import { CourseCard, HeaderCourse } from './components';
import { useCourseData } from '@/hooks';

const Courses = () => {
  const { courses } = useCourseData();

  return (
    <Flex className="mx-10 my-5" gap={16} vertical>
      <HeaderCourse />
      <Flex gap={8}>
        <Select
          placeholder="Category"
          style={{ width: 120 }}
          options={[
            { value: 'jack', label: 'Jack' },
            { value: 'lucy', label: 'Lucy' },
            { value: 'Yiminghe', label: 'yiminghe' },
          ]}
        />
        <Select
          placeholder="Filter By"
          style={{ width: 120 }}
          options={[
            { value: 'jack', label: 'Jack' },
            { value: 'lucy', label: 'Lucy' },
            { value: 'Yiminghe', label: 'yiminghe' },
          ]}
        />
      </Flex>
      <Flex gap={16} className="flex-wrap">
        {courses.map((course) => {
          return (
            <CourseCard
              key={course.id}
              id={course.id}
              title={course.title}
              description={course.description}
            />
          );
        })}
      </Flex>
    </Flex>
  );
};

export { Courses };
