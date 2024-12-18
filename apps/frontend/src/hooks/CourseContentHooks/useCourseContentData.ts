import { useEffect, useQuery } from '@/hooks';
import { courseContentApi } from '@/api';
import { useCourseContent } from '@/stores';
import { getResponseData } from '@/utils';

const useCourseContentData = (courseId: number, page: number) => {
  const {
    setCourseContentData,
    setCoursesContentsData,
    ...courseContentStore
  } = useCourseContent();

  // get by page
  const {
    data: courseContentByPage,
    refetch: refetchCourseContent,
    isError,
    ...queryCourseContentStates
  } = useQuery({
    queryKey: ['get-course-contents'],
    queryFn: async () => {
      const response = await courseContentApi.getCourseContentsByPage(
        courseId,
        page,
      );
      return response;
    },
    select(result) {
      const response = getResponseData(result);
      if (response?.data) {
        const courseContent = response.data.courseContent;
        return courseContent;
      }
      return null;
    },
  });

  // get all contents
  const {
    data: courseContents,
    refetch: refetchCourseContents,
    ...queryCourseContentsStates
  } = useQuery({
    queryKey: ['get-all-course-contents'],
    queryFn: async () => {
      const response = await courseContentApi.getAllCourseContents(courseId);
      return response;
    },
    select(result) {
      const response = getResponseData(result);
      if (response?.data) {
        const courseContents = response.data.courseContents;
        return courseContents;
      }
      return null;
    },
  });

  useEffect(() => {
    if (courseContentByPage) {
      setCourseContentData(courseContentByPage);
    }
  }, [courseContentByPage, setCourseContentData]);

  useEffect(() => {
    if (courseContents) {
      setCoursesContentsData(courseContents);
    }
  }, [courseContents, setCoursesContentsData]);

  useEffect(() => {
    if (isError) {
      setCourseContentData({
        content: '',
        page,
        course_id: courseId,
        title: '',
        video_url: '',
      });
    }
  }, [isError, setCourseContentData, courseId, page]);

  return {
    ...courseContentStore,
    refetchCourseContent,
    refetchCourseContents,
    ...queryCourseContentStates,
    ...queryCourseContentsStates,
  };
};

export { useCourseContentData };
