import { Flex, Layout } from '@/components';
import { Advertisement, CourseCard } from './components';
// import { StudentCourseStore, useStudentCourse, useUser } from '@/stores';
// import { AxiosResponse } from 'axios';
// import { FormatResponseType, AxiosError } from '@/types';
// import { ResponseApiType } from 'common';
// import { useCallback, useEffect, useQuery } from '@/hooks';
// import { studentCourseApi } from '@/api';

const { Content } = Layout;

const MainContent = () => {
  // const { setStudentCourses, studentCourses } = useStudentCourse();
  // const { user } = useUser();

  // const getStudentCourses = useCallback(
  //   (result: FormatResponseType | AxiosError) => {
  //     if (result instanceof AxiosError) {
  //       return null;
  //     }

  //     const response = result as unknown as AxiosResponse;
  //     const responseData = response.data as ResponseApiType;
  //     const studentCourses = responseData.data
  //       ?.studentCourses as unknown as StudentCourseStore[];
  //     setStudentCourses(studentCourses);
  //   },
  //   [setStudentCourses],
  // );

  // const { data: studentCoursesResponse } = useQuery({
  //   queryKey: ['student-courses'],
  //   queryFn: async () => {
  //     const response = await studentCourseApi.getStudentCourses(user.username);
  //     return response;
  //   },
  // });

  // // student courses
  // useEffect(() => {
  //   if (studentCoursesResponse) {
  //     getStudentCourses(studentCoursesResponse);
  //   }
  // }, [studentCoursesResponse, getStudentCourses]);

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
        <CourseCard title={'something'} />;
        {/* {studentCourses.map(() => {
          return <CourseCard title={'something'} />;
        })} */}
      </Flex>
    </Content>
  );
};

export { MainContent };
