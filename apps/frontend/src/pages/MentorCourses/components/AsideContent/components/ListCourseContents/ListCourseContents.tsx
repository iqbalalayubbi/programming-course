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
  const { setValue } = useQuill();

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
    };
    delete newCourseContent.id;
    setValue('');

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
      newCourseContent.page = pageNumber + 1;

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
