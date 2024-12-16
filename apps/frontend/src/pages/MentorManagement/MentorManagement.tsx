import { ArrowLeftOutlined, Button, Flex, Select, Link } from '@/components';
import {
  CourseCard,
  CoursePlaceholder,
  CreateCourseModal,
  HeaderCourse,
} from './components';
import { appRoute } from '@/enums';
import { useCallback, useCourseData, useEffect, useState } from '@/hooks';
import { getUsername } from '@/utils';

const MentorManagement = () => {
  const { courses } = useCourseData();
  const [mentorCourses, setMentorCourses] = useState(courses);

  const filterCourseByMentor = useCallback(
    (username: string) => {
      const mentorCourses = courses.filter(
        (course) => course.mentor_username === username,
      );

      setMentorCourses(mentorCourses);
    },
    [courses],
  );

  useEffect(() => {
    const username = getUsername();
    filterCourseByMentor(username);
  }, [courses, filterCourseByMentor]);

  return (
    <Flex className="mx-10 my-5 h-screen overflow-auto" gap={16} vertical>
      <CreateCourseModal />
      <HeaderCourse />
      <Flex justify="space-between" gap={8}>
        <Link to={appRoute.COURSES}>
          <Button type="text" icon={<ArrowLeftOutlined />} />
        </Link>
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
      </Flex>
      <Flex
        gap={16}
        className="flex-col sm:flex-row sm:flex-wrap"
        align="stretch"
      >
        {mentorCourses.map((course) => {
          return (
            <CourseCard
              key={course.id}
              id={course.id}
              title={course.title}
              description={course.description}
              imageUrl={course.thumbnail_url}
              courseTotal={mentorCourses.length}
            />
          );
        })}
        <CoursePlaceholder />
      </Flex>
    </Flex>
  );
};

export { MentorManagement };
