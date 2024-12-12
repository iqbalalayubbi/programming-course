import { Button, Flex, Modal, Rate } from '@/components';
import { MentorProfile, ReviewCard } from './components';
import { useCourse, useStudentCourse, useUser } from '@/stores';
import { JoinCoursePayload } from 'common';
import {
  useEffect,
  useMutation,
  useNavigate,
  useState,
  useParams,
  useCallback,
} from '@/hooks';
import { studentCourseApi } from '@/api';
import { appRoute, colorPalette } from '@/enums';

const AsideContent = () => {
  const { course } = useCourse();
  const { user, setJoined } = useUser();
  const { studentCourses } = useStudentCourse();
  const navigate = useNavigate();
  const { id } = useParams();
  const [isJoindedCourse, setIsJoinedCourse] = useState<boolean>(false);

  const joinCourseMutation = useMutation({
    mutationKey: ['joinCourse'],
    mutationFn: async (data: JoinCoursePayload) => {
      const response = await studentCourseApi.joinCourse(data);
      return response;
    },
    onSuccess: async () => {
      setJoined(true);
      navigate(appRoute.STUDY_ROOM);
      setTimeout(() => {
        setJoined(false);
      }, 3000);
    },
  });

  const onUserJoin = () => {
    const studentData = {
      course_id: course.id,
      user_username: user.username,
    };

    if (!isJoindedCourse) {
      Modal.info({
        title: 'Join Course',
        content: (
          <span>
            <strong className="text-primary text-xl">{course.title} ?</strong>
          </span>
        ),
        okText: 'Join',
        okButtonProps: { style: { backgroundColor: colorPalette.PRIMARY } },
        onOk: () => joinCourseMutation.mutate(studentData),
        cancelText: 'Cancel',
        okCancel: true,
        onCancel: () => console.log('cancel join course'),
        centered: true,
      });
    }
  };

  const checkUserJoinCourse = useCallback(
    (courseId: number) => {
      const findCourse = studentCourses.find((sc) => sc.course_id === courseId);
      const isJoined = findCourse ? true : false;
      setIsJoinedCourse(isJoined);
    },
    [studentCourses],
  );

  useEffect(() => {
    if (studentCourses) {
      checkUserJoinCourse(Number(id));
    }
  }, [studentCourses, checkUserJoinCourse, id]);

  return (
    <Flex className="w-1/2 bg-white h-full" gap={16} align="center" vertical>
      <h1 className="text-4xl font-bold my-5">Mentor</h1>
      <MentorProfile />
      <h1 className="text-dark-text font-bold text-6xl">4.0</h1>
      <Flex align="center" vertical>
        <Rate disabled allowHalf defaultValue={4.5} className="text-lg" />
        <span className="text-gray-third">243 Reviewed</span>
      </Flex>
      <Button
        type="primary"
        className={`w-3/4 ${isJoindedCourse ? 'bg-secondary' : ''}`}
        onClick={onUserJoin}
      >
        {isJoindedCourse ? 'Resume' : 'Learn Now'}
      </Button>
      <h1 className="text-2xl font-bold my-5">What they say</h1>
      <Flex className="w-full" align="center" gap={16} vertical>
        <ReviewCard />
        <ReviewCard />
      </Flex>
    </Flex>
  );
};

export { AsideContent };
