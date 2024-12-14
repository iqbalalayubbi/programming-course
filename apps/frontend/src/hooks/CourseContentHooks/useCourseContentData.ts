import { useCallback, useEffect, useQuery } from '@/hooks';
import { courseContentApi } from '@/api';
import { AxiosError, AxiosResponse } from 'axios';
import { FormatResponseType } from '@/types';
import { ResponseApiType } from 'common';
import { CourseContent, useCourseContent } from '@/stores';

const useCourseContentData = (courseId: number, page: number) => {
  const { setCourseContentData, ...courseContentStore } = useCourseContent();

  const { data, ...queryStates } = useQuery({
    queryKey: ['get-course-contents'],
    queryFn: async () => {
      const response = await courseContentApi.getCourseContentsByPage(
        courseId,
        page,
      );
      return response;
    },
  });

  const getCourseContentByPage = useCallback(
    (result: FormatResponseType | AxiosError) => {
      if (result instanceof AxiosError) {
        return null;
      }

      const response = result as unknown as AxiosResponse;
      const responseData = response.data as ResponseApiType;
      const courseContent = responseData.data
        ?.courseContent as unknown as CourseContent;
      setCourseContentData(courseContent);
    },
    [setCourseContentData],
  );

  useEffect(() => {
    if (data) {
      getCourseContentByPage(data);
    }
  }, [data, getCourseContentByPage]);

  return {
    ...courseContentStore,
    ...queryStates,
  };
};

export { useCourseContentData };
