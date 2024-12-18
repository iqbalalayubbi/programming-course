import { useEffect, useQuery } from '@/hooks';
import { useCourse } from '@/stores';
import { courseApi } from '@/api';
import { getResponseData } from '@/utils';

const useDetailCourseData = (courseId: number) => {
  const { setCourseData, ...courseStore } = useCourse();

  const { data: detailCourse, ...queryStates } = useQuery({
    queryKey: ['detail-course'],
    queryFn: async () => {
      const response = await courseApi.getCourseDetail(courseId);
      return response;
    },
    select(result) {
      const response = getResponseData(result);
      if (response?.data) {
        const course = response.data.course;
        return course;
      }
      return null;
    },
  });

  useEffect(() => {
    if (detailCourse) {
      setCourseData(detailCourse);
    }
  }, [detailCourse, setCourseData]);

  return {
    ...queryStates,
    ...courseStore,
  };
};

export { useDetailCourseData };
