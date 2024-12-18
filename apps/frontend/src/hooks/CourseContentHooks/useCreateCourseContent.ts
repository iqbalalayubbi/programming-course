import { courseContentApi } from '@/api';
import { CourseContent, useCourseContent } from '@/stores';
import { useMutation } from '@/hooks';
import { getResponseData } from '@/utils';

type Properties = {
  callback: (
    isSuccess: boolean,
    isFirstContent?: boolean,
    newCourseContent?: CourseContent,
  ) => void;
};

const useCreateCourseContent = ({ callback }: Properties) => {
  const { setCourseContentData, setCoursesContentsData } = useCourseContent();

  const addCourseMutation = useMutation({
    mutationKey: ['addCourseContent'],
    mutationFn: async (payload: { course_id: number; data: CourseContent }) => {
      const response = await courseContentApi.createCourseContent(
        payload.course_id,
        payload.data,
      );
      return response;
    },
    onSuccess: (result) => {
      const response = getResponseData(result);
      if (!response) return;

      const newCourseContent = response.data?.courseContent as CourseContent;
      setCourseContentData(newCourseContent);
      setCoursesContentsData([newCourseContent]);

      const isFirstContent = newCourseContent.page === 1;
      callback(true, isFirstContent, newCourseContent);
    },
    onError: () => {
      callback(false);
    },
  });

  return { ...addCourseMutation };
};

export { useCreateCourseContent };
