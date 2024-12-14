import { courseContentApi } from '@/api';
import { Button, Input, List, Modal, PlusOutlined, toast } from '@/components';
import { appRoute } from '@/enums';
import { CourseContent, useMentorManagement, useCourseContent } from '@/stores';
import { useMutation, useNavigate, useSearchParams, useState } from '@/hooks';
import { AxiosResponse } from 'axios';
import { ResponseApiType } from 'common';

const ListCourseContents = () => {
  const { newCourseData, setNewCourseData } = useMentorManagement();
  const { setCourseContentData } = useCourseContent();
  const navigate = useNavigate();

  const [isShowModal, setIsShowModal] = useState(true);
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
      setIsShowModal(false);
      toast.success('Your first content has been added');
    },
    onError: () => {
      toast.error('Failed to add course content');
      navigate(appRoute.MENTOR_MANAGEMENT);
    },
  });

  const handleAddCourseContent = () => {
    const pageNumber = queryParameters.get('page');
    const courseId = Number(newCourseData.id);

    if (courseId) {
      const newCourseContent = {
        ...newCourseData,
        course_id: courseId,
        title: pageName,
        page: Number(pageNumber),
      };

      setNewCourseData(newCourseContent);

      addCourseMutation.mutate({
        course_id: courseId,
        data: {
          title: pageName,
          page: Number(pageNumber),
          course_id: courseId,
          content: '',
          video_url: '',
        },
      });
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

  const data = [
    { isActive: true, text: 'Basic HTML' },
    { isActive: false, text: 'Basic CSS' },
    { isActive: false, text: 'Basic Javascript' },
    { isActive: false, text: 'Basic CSS' },
  ];

  return (
    <>
      <List
        className="w-full"
        bordered={false}
        dataSource={data}
        renderItem={(item, i) => (
          <>
            <List.Item className="group hover:cursor-pointer hover:bg-primary hover:text-light-text">
              <h3
                className={`${item.isActive ? 'text-primary font-semibold group-hover:text-light-text' : ''} font-medium text-xl indent-3 block w-full transition-all duration-300`}
              >
                {item.text}
              </h3>
            </List.Item>
            {i === data.length - 1 && (
              <Button
                type="text"
                icon={<PlusOutlined />}
                iconPosition="end"
                className="w-full"
                onClick={() => setIsShowModal(true)}
              >
                Add Page
              </Button>
            )}
          </>
        )}
      />
      {renderCreateForm()}
    </>
  );
};

export { ListCourseContents };
