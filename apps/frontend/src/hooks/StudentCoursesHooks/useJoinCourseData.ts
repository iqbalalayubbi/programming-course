import { JoinCoursePayload } from 'common';
import { useMutation } from '@/hooks';
import { studentCourseApi } from '@/api';

const useJoinCourseData = () => {
  const { ...queryStates } = useMutation({
    mutationKey: ['joinCourse'],
    mutationFn: async (data: JoinCoursePayload) => {
      const response = await studentCourseApi.joinCourse(data);
      return response;
    },
  });

  return {
    ...queryStates,
  };
};

export { useJoinCourseData };
