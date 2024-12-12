import { Flex } from '@/components';
import { AsideContent, MainContent } from './components';
import {
  useParams,
  useCallback,
  useQuery,
  useEffect,
  useDetailCourseData,
} from '@/hooks';
import { useStudentCourse, StudentCourseStore, useUser } from '@/stores';
import { studentCourseApi } from '@/api';
import { AxiosError, FormatResponseType } from '@/types';
import { AxiosResponse } from 'axios';
import { ResponseApiType } from 'common';

const DetailCourse = () => {
  const { id } = useParams();
  useDetailCourseData(Number(id));

  // const courseStore = useCourse();
  // const { studentCourses } = useStudentCourse();
  const { setStudentCourses } = useStudentCourse();
  const { user } = useUser();

  // const getCourseData = (result: FormatResponseType | AxiosError | null) => {
  //   if (result instanceof AxiosError || null) {
  //     return null;
  //   }

  //   const response = result?.data as unknown as AxiosResponse;
  //   const responseData = response.data;
  //   const course = responseData.course as CourseStore;
  //   courseStore.course = course;
  // };

  // const getDetailCourse = useCallback(
  //   (courses: CourseStore[]) => {
  //     const course = courses.find((crs) => crs.id === parseInt(id as string));
  //     if (!course) return null;
  //     courseStore.course = course;
  //   },
  //   [courseStore, id],
  // );

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

  // useQuery({
  //   queryKey: ['detail-course'],
  //   queryFn: async () => {
  //     if (courseStore.courses.length === 0) {
  //       const courseId = parseInt(id as string);
  //       const response = await courseApi.getCourseDetail(courseId);
  //       return response;
  //     } else {
  //       getDetailCourse(courseStore.courses);
  //       return null;
  //     }
  //   },
  //   select: (response) => getCourseData(response),
  // });

  const { data: studentCoursesResponse } = useQuery({
    queryKey: ['student-courses'],
    queryFn: async () => {
      const response = await studentCourseApi.getStudentCourses(user.username);
      return response;
    },
  });

  // student courses
  useEffect(() => {
    if (studentCoursesResponse) {
      getStudentCourses(studentCoursesResponse);
    }
  }, [studentCoursesResponse, getStudentCourses]);

  return (
    <Flex className="h-full">
      <MainContent />
      <AsideContent />
    </Flex>
  );
};

export { DetailCourse };
