import { Button, Flex, Modal, Rate } from '@/components';
import { MentorProfile, ReviewCard } from './components';
import { useCourse, useStudentCourse, useUser } from '@/stores';
import {
  useEffect,
  useNavigate,
  useState,
  useParams,
  useCallback,
  useJoinCourseData,
} from '@/hooks';
import { appRoute, colorPalette } from '@/enums';

const AsideContent = () => {
  const { course } = useCourse();
  const { user, setJoined } = useUser();
  const { studentCourses } = useStudentCourse();
  const navigate = useNavigate();
  const { id } = useParams();
  const [isJoindedCourse, setIsJoinedCourse] = useState<boolean>(false);

  const { mutate, isSuccess } = useJoinCourseData();

  const onUserJoin = () => {
    const studentData = {
      course_id: course.id,
      user_username: user.username,
    };

    if (!isJoindedCourse) {
      return Modal.info({
        title: 'Join Course',
        content: (
          <span>
            <strong className="text-primary text-xl">{course.title} ?</strong>
          </span>
        ),
        okText: 'Join',
        okButtonProps: { style: { backgroundColor: colorPalette.PRIMARY } },
        onOk: () => mutate(studentData),
        cancelText: 'Cancel',
        okCancel: true,
        centered: true,
      });
    }

    navigate(
      `${appRoute.STUDY_ROOM_QUERY.replace(':id', String(course.id)).replace(':page', '1')}`,
    );
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

  useEffect(() => {
    if (isSuccess) {
      setJoined(true);
      navigate(appRoute.STUDY_ROOM);
      setTimeout(() => {
        setJoined(false);
      }, 3000);
    }
  }, [isSuccess, navigate, setJoined]);

  return (
    <Flex
      className="w-full sm:w-1/2 bg-white h-full"
      gap={16}
      align="center"
      vertical
    >
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
