import { useCallback, useEffect, useQuery } from '@/hooks';
import { courseContentApi } from '@/api';
import { AxiosError, AxiosResponse } from 'axios';
import { FormatResponseType } from '@/types';
import { ResponseApiType } from 'common';
import { CourseContent, useCourseContent } from '@/stores';

const useCourseContentData = (courseId: number, page: number) => {
  const {
    setCourseContentData,
    setCoursesContentsData,
    ...courseContentStore
  } = useCourseContent();

  // get by page
  const { data: courseContenByPageResponse, ...queryCourseContentStates } =
    useQuery({
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

  // get all contents
  const { data: courseContentsResponse, ...queryCourseContentsStates } =
    useQuery({
      queryKey: ['get-all-course-contents'],
      queryFn: async () => {
        const response = await courseContentApi.getAllCourseContents(courseId);
        return response;
      },
    });

  const getAllCourseContents = useCallback(
    (result: FormatResponseType | AxiosError) => {
      if (result instanceof AxiosError) {
        return null;
      }

      const response = result as unknown as AxiosResponse;
      const responseData = response.data as ResponseApiType;
      const courseContents = responseData.data
        ?.courseContents as unknown as CourseContent[];
      setCoursesContentsData(courseContents);
    },
    [setCoursesContentsData],
  );

  useEffect(() => {
    if (courseContenByPageResponse) {
      getCourseContentByPage(courseContenByPageResponse);
    }
  }, [courseContenByPageResponse, getCourseContentByPage]);

  useEffect(() => {
    if (courseContentsResponse) {
      getAllCourseContents(courseContentsResponse);
    }
  }, [courseContentsResponse, getAllCourseContents]);

  return {
    ...courseContentStore,
    ...queryCourseContentStates,
    ...queryCourseContentsStates,
  };
};

export { useCourseContentData };
