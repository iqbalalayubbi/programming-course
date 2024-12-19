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
import { CourseContent, useMentorManagement, useCourseContent } from '@/stores';
import {
  useCourseContentData,
  useCreateCourseContent,
  useEffect,
  useNavigate,
  useSearchParams,
  useState,
} from '@/hooks';
import { useLocation } from 'react-router';

const ListCourseContents = () => {
  const { isCreateCourse, setIsCreateCourse } = useMentorManagement();
  const { courseContents, courseContent } = useCourseContent();

  const navigate = useNavigate();
  const location = useLocation();

  const [isShowModal, setIsShowModal] = useState(false);
  const [queryParameters] = useSearchParams();
  const [pageName, setPageName] = useState('');
  const pageNumber = Number(queryParameters.get('page'));
  const courseId = Number(queryParameters.get('course'));

  const { refetchCourseContent, refetchCourseContents } = useCourseContentData(
    courseId,
    pageNumber,
  );

  const onCreatedCourseContent = (
    isSuccess: boolean,
    isFirstContent?: boolean,
    newCourseContent?: CourseContent,
  ) => {
    if (!isSuccess) {
      toast.error('Failed to add course content');
      navigate(appRoute.MENTOR_MANAGEMENT);
      return;
    }

    setPageName('');
    setIsShowModal(false);

    if (isFirstContent) {
      setIsCreateCourse(false);
      toast.success('Your first content has been added');
      return;
    }

    toast.success('Your content has been added');
    navigate(
      `${appRoute.MENTOR_COURSES}?page=${newCourseContent?.page}&course=${courseId}`,
    );
  };

  const { mutate: createCourse } = useCreateCourseContent({
    callback: onCreatedCourseContent,
  });

  const handleAddCourseContent = () => {
    const newCourseContent = {
      ...courseContent,
      title: pageName,
      course_id: courseId,
      content: '',
      video_url: '',
    };
    delete newCourseContent.id;

    if (courseContents.length === 0) {
      // create first content
      newCourseContent.page = Number(pageNumber);
      createCourse({
        course_id: courseId,
        data: newCourseContent,
      });
      return;
    } else {
      // create others content
      newCourseContent.page = courseContents.length + 1;

      createCourse({
        course_id: courseId,
        data: { ...newCourseContent },
      });
    }

    refetchCourseContent();
    navigate(
      `${appRoute.MENTOR_COURSES}?page=${newCourseContent.page}&course=${courseId}`,
    );
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
        renderItem={(item, i) => (
          <Link
            to={`${appRoute.MENTOR_COURSES}?course=${item.course_id}&page=${item.page}`}
          >
            <List.Item
              className={`${pageNumber === i + 1 ? 'bg-primary' : ''} group hover:cursor-pointer hover:bg-primary hover:text-light-text`}
            >
              <h3
                className={`${pageNumber === i + 1 ? 'text-light-text font-semibold group-hover:text-white' : ''} font-medium text-xl indent-3 block w-full transition-all duration-300`}
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
