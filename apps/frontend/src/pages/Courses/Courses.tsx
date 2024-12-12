import { Flex, Select } from '@/components';
import { CourseCard, HeaderCourse } from './components';
import { useQuery } from '@/hooks';
import { courseApi } from '@/api';
import { AxiosError, AxiosResponse } from 'axios';
import { FormatResponseType } from '@/types';
import { ResponseApiType } from 'common';

const Courses = () => {
  const getCourses = (result: FormatResponseType | AxiosError) => {
    if (result instanceof AxiosError) {
      return null;
    }

    const response = result as unknown as AxiosResponse;
    const responseData = response.data as ResponseApiType;
    const courses = responseData.data?.courses;
    return courses;
  };

  useQuery({
    queryKey: ['list-courses'],
    queryFn: async () => {
      const response = await courseApi.getAllCourses();
      return response;
    },
    select: (response) => getCourses(response),
  });

  return (
    <Flex className="mx-10 my-5" gap={16} vertical>
      <HeaderCourse />
      <Flex gap={8}>
        <Select
          placeholder="Category"
          style={{ width: 120 }}
          options={[
            { value: 'jack', label: 'Jack' },
            { value: 'lucy', label: 'Lucy' },
            { value: 'Yiminghe', label: 'yiminghe' },
          ]}
        />
        <Select
          placeholder="Filter By"
          style={{ width: 120 }}
          options={[
            { value: 'jack', label: 'Jack' },
            { value: 'lucy', label: 'Lucy' },
            { value: 'Yiminghe', label: 'yiminghe' },
          ]}
        />
      </Flex>
      <Flex gap={16} className="flex-wrap">
        <CourseCard />
        <CourseCard />
        <CourseCard />
        <CourseCard />
        <CourseCard />
        <CourseCard />
        <CourseCard />
      </Flex>
    </Flex>
  );
};

export { Courses };
