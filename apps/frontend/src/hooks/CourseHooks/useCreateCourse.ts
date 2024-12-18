import { CourseStore, useMentorManagement } from '@/stores';
import { useMutation } from '@/hooks';
import { courseApi } from '@/api';
import { getResponseData } from '@/utils';

const useCreateCourse = (
  callback: (isSuccess: boolean, course?: CourseStore) => void,
) => {
  const { setNewCourseData, newCourseData, setIsCreateCourse } =
    useMentorManagement();

  const createCourseMutation = useMutation({
    mutationKey: ['create-course'],
    mutationFn: async (data: FormData) => {
      const result = await courseApi.createCourse(data);
      return result;
    },
    onSuccess: (result) => {
      const response = getResponseData(result);
      if (!response) return;

      const course = response.data?.course as CourseStore;
      setNewCourseData({ ...newCourseData, id: course.id });
      setIsCreateCourse(true);
      callback(true, course);
    },
    onError: () => {
      callback(false);
    },
  });

  return { ...createCourseMutation };
};

export { useCreateCourse };
