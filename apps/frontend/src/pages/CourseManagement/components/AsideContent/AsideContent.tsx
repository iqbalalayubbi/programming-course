import { Button, Flex } from 'antd';
import { StudentCard } from './components';
import { useNavigate, useParams } from 'react-router';
import { appRoute } from '@/enums';
import { useCallback, useEffect, useQuery } from '@/hooks';
import { studentCourseApi } from '@/api';

import { UserStore, useStudentCourse } from '@/stores';
import { AxiosError, FormatResponseType } from '@/types';
import { AxiosResponse } from 'axios';
import { ResponseApiType } from 'common';

const AsideContent = () => {
  const { courseId } = useParams();
  const navigate = useNavigate();
  const { setUsersInCourse, usersInCourse } = useStudentCourse();

  const { data } = useQuery({
    queryKey: ['studentCourses'],
    queryFn: async () => {
      const response = await studentCourseApi.getStudentCourseByCourseId(
        Number(courseId),
      );
      return response;
    },
  });

  const getStudentsJoinCourse = useCallback(
    (result: FormatResponseType | AxiosError) => {
      if (result instanceof AxiosError) {
        return null;
      }

      const response = result as unknown as AxiosResponse;
      const responseData = response.data as ResponseApiType;
      const users = responseData.data?.users as unknown as UserStore[];
      setUsersInCourse(users);
    },
    [setUsersInCourse],
  );

  useEffect(() => {
    if (data) {
      getStudentsJoinCourse(data);
    }
  }, [data, getStudentsJoinCourse]);

  return (
    <Flex className="w-full px-5" vertical>
      <h1 className="text-2xl font-bold my-5">List of Students</h1>
      <Flex gap={8} vertical className="w-full mb-5">
        {usersInCourse.map((student) => {
          return (
            <StudentCard
              key={student.username}
              username={student.username}
              imageUrl={student.image_url}
              surename={student.surename}
            />
          );
        })}
        {/* <StudentCard children /> */}
      </Flex>
      <Button
        type="primary"
        onClick={() =>
          navigate(`${appRoute.MENTOR_COURSES}?page=1&course=${courseId}`)
        }
      >
        Edit Course
      </Button>
    </Flex>
  );
};

export { AsideContent };
