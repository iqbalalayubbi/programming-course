import { useCallback, useQuery, useEffect } from '@/hooks';
import { StudentCourseStore, useStudentCourse, useUser } from '@/stores';
import { studentCourseApi } from '@/api';
import { AxiosError, FormatResponseType } from '@/types';
import { AxiosResponse } from 'axios';
import { ResponseApiType } from 'common';

const useStudentCoursesData = () => {
  const { setStudentCourses, ...studentCourseStore } = useStudentCourse();
  const { user } = useUser();

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
  const { data: studentCoursesResponse, ...queryStates } = useQuery({
    queryKey: ['student-courses'],
    queryFn: async () => {
      const response = await studentCourseApi.getStudentCourses(user.username);
      return response;
    },
  });

  useEffect(() => {
    if (studentCoursesResponse) {
      getStudentCourses(studentCoursesResponse);
    }
  }, [studentCoursesResponse, getStudentCourses]);

  return {
    ...queryStates,
    ...studentCourseStore,
  };
};

export { useStudentCoursesData };
