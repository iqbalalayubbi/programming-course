import { ArrowLeftOutlined, Button, Flex, Select } from '@/components';
import { CourseCard, CoursePlaceholder, HeaderCourse } from './components';
import { Link } from 'react-router';
import { appRoute } from '@/enums';

const MentorManagement = () => {
  const allCourses = [
    {
      id: 1,
      title: 'React for Beginners',
      description: 'Learn React from scratch',
    },
    {
      id: 2,
      title: 'Node.js for Beginners',
      description: 'Learn Node.js from scratch',
    },
  ];

  return (
    <Flex className="mx-10 my-5" gap={16} vertical>
      <HeaderCourse />
      <Flex justify="space-between" gap={8}>
        <Link to={appRoute.COURSES}>
          <Button type="text" icon={<ArrowLeftOutlined />} />
        </Link>
        <Flex gap={16}>
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
      </Flex>
      <Flex gap={16} className="flex-wrap">
        {allCourses.map((course) => {
          return (
            <CourseCard
              key={course.id}
              id={course.id}
              title={course.title}
              description={course.description}
            />
          );
        })}
        <CoursePlaceholder />
      </Flex>
    </Flex>
  );
};

export { MentorManagement };
