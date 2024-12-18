import { appRoute, colorPalette } from '@/enums';
import { CourseStore, useMentorManagement } from '@/stores';
import {
  Button,
  Flex,
  Form,
  Input,
  Modal,
  toast,
  ToastContainer,
} from '@/components';
import { useCreateCourse, useNavigate } from '@/hooks';
import { UploadThumbnail } from './components';
import { getUsername } from '@/utils';

const CreateCourseModal = () => {
  const navigate = useNavigate();
  const [form] = Form.useForm();

  const {
    setNewCourseData,
    newCourseData,
    setIsShowCreateModal,
    isShowCreateModal,
  } = useMentorManagement();

  const onCreatedCourse = (isSuccess: boolean, course?: CourseStore) => {
    setIsShowCreateModal(false);
    if (!isSuccess) {
      toast.error('Failed to create course');
      return;
    }

    if (course) {
      navigate(`${appRoute.MENTOR_COURSES}?page=1&course=${course.id}`);
      return;
    }
  };

  const { mutate } = useCreateCourse(onCreatedCourse);

  const handleCreateCourse = () => {
    const values = form.getFieldsValue();
    const username = getUsername();
    const newCourse = {
      ...newCourseData,
      ...values,
      mentor_username: username,
    };
    const formData = new FormData();

    formData.append('title', values.title);
    formData.append('description', values.description);
    formData.append('mentor_username', username);
    formData.append('photo', newCourseData.selectedImage as Blob);

    setNewCourseData(newCourse);
    mutate(formData);
  };

  const onCreateCourse = () => {
    Modal.confirm({
      title: 'Create Course?',
      content: 'Are you sure to create this course?',
      onOk: handleCreateCourse,
      onCancel: () => {},
      centered: true,
      okButtonProps: { style: { backgroundColor: colorPalette.PRIMARY } },
    });
  };

  return (
    <Modal
      open={isShowCreateModal}
      centered
      title="Create new course"
      footer={false}
      onCancel={() => {
        setIsShowCreateModal(false);
      }}
    >
      <ToastContainer />
      <Flex vertical>
        <UploadThumbnail />
        <Form
          layout="vertical"
          form={form}
          onFinish={onCreateCourse}
          className="flex flex-col"
        >
          <Form.Item
            name="title"
            label={<span className="font-semibold">Course Name</span>}
            className="my-2"
            rules={[{ required: true, message: 'Please enter course name!' }]}
          >
            <Input placeholder="Enter course name" />
          </Form.Item>
          <Form.Item
            name="description"
            label={<span className="font-semibold">Description</span>}
            rules={[
              { required: true, message: 'Please enter course description!' },
            ]}
          >
            <Input.TextArea
              placeholder="Enter description"
              autoSize={{ minRows: 3, maxRows: 3 }}
            />
          </Form.Item>
          <Flex gap={16} className="self-end">
            <Button type="default" onClick={() => setIsShowCreateModal(false)}>
              Cancel
            </Button>
            <Button type="primary" htmlType="submit">
              Create New Course
            </Button>
          </Flex>
        </Form>
      </Flex>
    </Modal>
  );
};

export { CreateCourseModal };
