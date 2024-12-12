import { useCallback, useEffect, useQuery } from '@/hooks';
import { CourseStore, useCourse } from '@/stores';
import { courseApi } from '@/api';
import { AxiosError, FormatResponseType } from '@/types';
import { AxiosResponse } from 'axios';

const useDetailCourseData = (courseId: number) => {
  const { setCourseData, ...courseStore } = useCourse();

  const getCourseData = useCallback(
    (result: FormatResponseType | AxiosError | null) => {
      if (result instanceof AxiosError || null) {
        return null;
      }

      const response = result?.data as unknown as AxiosResponse;
      const responseData = response.data;
      const course = responseData.course as CourseStore;
      setCourseData(course);
    },
    [setCourseData],
  );

  const { data: detailCourseResponse, ...queryStates } = useQuery({
    queryKey: ['detail-course'],
    queryFn: async () => {
      const response = await courseApi.getCourseDetail(courseId);
      return response;
    },
  });

  useEffect(() => {
    if (detailCourseResponse) {
      getCourseData(detailCourseResponse);
    }
  }, [detailCourseResponse, getCourseData]);

  return {
    ...queryStates,
    ...courseStore,
  };
};

export { useDetailCourseData };
