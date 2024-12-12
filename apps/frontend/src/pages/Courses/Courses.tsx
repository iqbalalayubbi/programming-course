import { Flex, Select } from '@/components';
import { CourseCard, HeaderCourse } from './components';
import { useCallback, useEffect, useQuery } from '@/hooks';
import { courseApi, studentCourseApi } from '@/api';
import { AxiosError, AxiosResponse } from 'axios';
import { FormatResponseType } from '@/types';
import { ResponseApiType } from 'common';
import {
  CourseStore,
  StudentCourseStore,
  useCourse,
  useStudentCourse,
  useUser,
} from '@/stores';

const Courses = () => {
  const { setCoursesData, courses } = useCourse();
  const { user } = useUser();
  const { setStudentCourses } = useStudentCourse();

  const getCourses = useCallback(
    (result: FormatResponseType | AxiosError) => {
      if (result instanceof AxiosError) {
        return null;
      }

      const response = result as unknown as AxiosResponse;
      const responseData = response.data as ResponseApiType;
      const courses = responseData.data?.courses as unknown as CourseStore[];
      setCoursesData(courses);
    },
    [setCoursesData],
  );

  const getStudentCourses = useCallback(
    (result: FormatResponseType | AxiosError) => {
      if (result instanceof AxiosError) {
        return null;
      }

      const response = result as unknown as AxiosResponse;
      const responseData = response.data as ResponseApiType;
      const studentCourses = responseData.data
        ?.studentCourses as unknown as StudentCourseStore[];
      setStudentCourses(studentCourses);
    },
    [setStudentCourses],
  );

  const { data: listCoursesResponse } = useQuery({
    queryKey: ['list-courses'],
    queryFn: async () => {
      const response = await courseApi.getAllCourses();
      return response;
    },
  });

  const { data: studentCoursesResponse } = useQuery({
    queryKey: ['student-courses'],
    queryFn: async () => {
      const response = await studentCourseApi.getStudentCourses(user.username);
      return response;
    },
  });

  // list courses
  useEffect(() => {
    if (listCoursesResponse) {
      getCourses(listCoursesResponse);
    }
  }, [listCoursesResponse, getCourses]);

  // student courses
  useEffect(() => {
    if (studentCoursesResponse) {
      getStudentCourses(studentCoursesResponse);
    }
  }, [studentCoursesResponse, getStudentCourses]);

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
