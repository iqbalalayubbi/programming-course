import { dashboardApi } from '@/api';
import { useQuery, useCallback, useEffect } from '@/hooks';
import { AxiosResponse } from 'axios';
import { FormatResponseType, AxiosError } from '@/types';
import { ResponseApiType } from 'common';
import { CourseStore, useCourse } from '@/stores';
import { getUsername } from '@/utils';

const useDashboardData = () => {
  const { setCoursesData, ...courseStore } = useCourse();

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

  const { data: listCoursesResponse, ...queryStates } = useQuery({
    queryKey: ['list-courses'],
    queryFn: async () => {
      const username = getUsername();
      const response = await dashboardApi.getStudentCourses(username);
      return response;
    },
  });

  // list courses
  useEffect(() => {
    if (listCoursesResponse) {
      getCourses(listCoursesResponse);
    }
  }, [listCoursesResponse, getCourses]);

  return {
    ...courseStore,
    ...queryStates,
  };
};

export { useDashboardData };
