import { Button, Flex, Link, Select } from '@/components';
import { CourseCard, HeaderCourse } from './components';
import { useCallback, useCourseData, useEffect, useState } from '@/hooks';
import { appRoute, role } from '@/enums';
import { getRole, getUsername } from '@/utils';
import { CourseStore } from '@/stores';

const Courses = () => {
  const { courses, search, defaultCourses, setCoursesData } = useCourseData();

  const [searchCourses, setSearchCourses] = useState<CourseStore[]>([]);

  const searchCourse = useCallback(
    (value: string) => {
      if (value === '') {
        setCoursesData(defaultCourses);
        return;
      }

      setTimeout(() => {
        const findCourses = courses.filter((c) =>
          c.title.toLowerCase().includes(value.toLowerCase()),
        );
        setSearchCourses(findCourses);
      }, 300);
    },
    [courses, setCoursesData, defaultCourses],
  );

  useEffect(() => {
    searchCourse(search);
  }, [search, searchCourse]);

  useEffect(() => {
    setSearchCourses(defaultCourses);
  }, [defaultCourses]);

  return (
    <Flex className="mx-10 my-5 h-screen overflow-auto" gap={16} vertical>
      <HeaderCourse />
      <Flex justify="space-between" gap={8}>
        <Flex gap={16}>
          <Select
            placeholder="Category"
            style={{ width: 200 }}
            options={[
              { value: 'web programming', label: 'web programming' },
              { value: 'data science', label: 'data science' },
              {
                value: 'artificial inteligience',
                label: 'artificial inteligience',
              },
              { value: 'backend development', label: 'backend development' },
            ]}
          />
          <Select
            placeholder="Filter By"
            style={{ width: 120 }}
            options={[
              { value: 'popular', label: 'popular' },
              { value: 'rating', label: 'rating' },
              { value: 'student', label: 'student' },
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
        {searchCourses.map((course) => {
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
      {searchCourses.length === 0 && (
        <span className="text-gray-third font-semibold italic text-center mt-20">
          Not Found Content
        </span>
      )}
    </Flex>
  );
};

export { Courses };
