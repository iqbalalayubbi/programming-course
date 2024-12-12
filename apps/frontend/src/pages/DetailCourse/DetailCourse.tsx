import { Flex } from '@/components';
import { AsideContent, MainContent } from './components';
import { useParams, useCallback, useQuery } from '@/hooks';
import { CourseStore, useCourse } from '@/stores';
import { courseApi } from '@/api';
import { AxiosError, FormatResponseType } from '@/types';
import { AxiosResponse } from 'axios';

const DetailCourse = () => {
  const { id } = useParams();
  const courseStore = useCourse();

  const getCourseData = (result: FormatResponseType | AxiosError | null) => {
    if (result instanceof AxiosError || null) {
      return null;
    }

    const response = result?.data as unknown as AxiosResponse;
    const responseData = response.data;
    const course = responseData.course as CourseStore;
    courseStore.course = course;
  };

  const getDetailCourse = useCallback(
    (courses: CourseStore[]) => {
      const course = courses.find((crs) => crs.id === parseInt(id as string));
      if (!course) return null;
      courseStore.course = course;
    },
    [courseStore, id],
  );

  useQuery({
    queryKey: ['detail-course'],
    queryFn: async () => {
      if (courseStore.courses.length === 0) {
        const courseId = parseInt(id as string);
        const response = await courseApi.getCourseDetail(courseId);
        return response;
      } else {
        getDetailCourse(courseStore.courses);
        return null;
      }
    },
    select: (response) => getCourseData(response),
  });

  return (
    <Flex className="h-full">
      <MainContent />
      <AsideContent />
    </Flex>
  );
};

export { DetailCourse };
