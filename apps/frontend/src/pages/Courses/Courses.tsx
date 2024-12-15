import { Button, Flex, Link, Select } from '@/components';
import { CourseCard, HeaderCourse } from './components';
import { useCourseData } from '@/hooks';
import { appRoute, role } from '@/enums';
import { getRole, getUsername } from '@/utils';

const Courses = () => {
  const { courses } = useCourseData();

  return (
    <Flex className="mx-10 my-5" gap={16} vertical>
      <HeaderCourse />
      <Flex justify="space-between" gap={8}>
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
        {getRole() === role.MENTOR && (
          <Link to={appRoute.MENTOR_MANAGEMENT}>
            <Button type="primary">Mentor Management</Button>
          </Link>
        )}
      </Flex>
      <Flex gap={16} className="flex-col sm:flex-row sm:flex-wrap">
        {courses.map((course) => {
          if (course.mentor_username !== getUsername()) {
            return (
              <CourseCard
                key={course.id}
                id={course.id}
                title={course.title}
                description={course.description}
                imageUrl={course.thumbnail_url}
              />
            );
          }
        })}
      </Flex>
    </Flex>
  );
};

export { Courses };
