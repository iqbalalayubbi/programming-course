import { courseContentApi } from '@/api';
import {
  Button,
  Input,
  Link,
  List,
  Modal,
  PlusOutlined,
  toast,
} from '@/components';
import { appRoute } from '@/enums';
import {
  CourseContent,
  useMentorManagement,
  useCourseContent,
  useQuill,
} from '@/stores';
import {
  useCourseContentData,
  useEffect,
  useMutation,
  useNavigate,
  useSearchParams,
  useState,
} from '@/hooks';
import { AxiosResponse } from 'axios';
import { ResponseApiType } from 'common';
import { useLocation } from 'react-router';

const ListCourseContents = () => {
  const { newCourseData, setNewCourseData, isCreateCourse, setIsCreateCourse } =
    useMentorManagement();
  const { setCourseContentData, setCoursesContentsData, courseContents } =
    useCourseContent();
  const { setValue } = useQuill();

  const navigate = useNavigate();
  const location = useLocation();

  const [isShowModal, setIsShowModal] = useState(false);
  const [queryParameters] = useSearchParams();
  const [pageName, setPageName] = useState('');

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
      const response = result as unknown as AxiosResponse;
      const responseData = response.data as ResponseApiType;
      const newCourseContent = responseData.data
        ?.courseContent as unknown as CourseContent;

      setCourseContentData(newCourseContent);
      setCoursesContentsData([newCourseContent]);
      setIsShowModal(false);
      setIsCreateCourse(false);

      toast.success('Your first content has been added');
    },
    onError: () => {
      toast.error('Failed to add course content');
      navigate(appRoute.MENTOR_MANAGEMENT);
    },
  });

  const pageNumber = Number(queryParameters.get('page'));
  const courseId = Number(queryParameters.get('course'));

  const { refetchCourseContent, refetchCourseContents } = useCourseContentData(
    courseId,
    pageNumber,
  );

  const handleAddCourseContent = () => {
    const newCourseId = Number(newCourseData.id);

    if (newCourseId) {
      const newCourseContent = {
        ...newCourseData,
        course_id: newCourseId,
        title: pageName,
        page: Number(pageNumber),
      };

      setNewCourseData(newCourseContent);

      addCourseMutation.mutate({
        course_id: newCourseId,
        data: {
          title: pageName,
          page: Number(pageNumber),
          course_id: newCourseId,
          content: '',
          video_url: '',
        },
      });
    }

    if (courseId) {
      const newCourseContent = {
        ...newCourseData,
        course_id: courseId,
        title: pageName,
        page: Number(pageNumber),
      };

      setNewCourseData(newCourseContent);
      setValue('');
      const newPage = courseContents.length + 1;

      addCourseMutation.mutate({
        course_id: courseId,
        data: {
          title: pageName,
          page: newPage,
          course_id: courseId,
          content: '',
          video_url: '',
        },
      });

      refetchCourseContent();
      navigate(`${appRoute.MENTOR_COURSES}?page=${newPage}&course=${courseId}`);
    }
  };

  const renderCreateForm = () => {
    return (
      <Modal
        title="Add New Page"
        centered
        open={isShowModal}
        onCancel={() => setIsShowModal(false)}
        onOk={handleAddCourseContent}
      >
        <Input
          placeholder="Enter page name"
          value={pageName}
          onChange={(e) => setPageName(e.target.value)}
        />
      </Modal>
    );
  };

  useEffect(() => {
    setIsShowModal(isCreateCourse);
  }, [isCreateCourse]);

  useEffect(() => {
    refetchCourseContent();
    refetchCourseContents();
  }, [location.search, refetchCourseContent, refetchCourseContents]);

  return (
    <>
      <List
        className="w-full h-40 overflow-auto border-t border-b shadow-sm"
        bordered={false}
        dataSource={courseContents}
        renderItem={(item) => (
          <Link
            to={`${appRoute.MENTOR_COURSES}?course=${item.course_id}&page=${item.page}`}
          >
            <List.Item className="group hover:cursor-pointer hover:bg-primary hover:text-light-text">
              <h3
                className={`font-medium text-xl indent-3 block w-full transition-all duration-300`}
              >
                {item.title}
              </h3>
            </List.Item>
          </Link>
        )}
      />
      <Button
        type="text"
        icon={<PlusOutlined />}
        iconPosition="end"
        className="w-full"
        onClick={() => setIsShowModal(true)}
      >
        Add Page
      </Button>
      {renderCreateForm()}
    </>
  );
};

export { ListCourseContents };
