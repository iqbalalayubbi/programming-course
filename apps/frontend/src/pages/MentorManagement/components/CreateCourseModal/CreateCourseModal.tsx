import { appRoute } from '@/enums';
import { useMentorManagement } from '@/stores';
import { Flex, Input, Modal } from '@/components';
import { useNavigate } from '@/hooks';
import { UploadThumbnail } from './components';

const CreateCourseModal = () => {
  const navigate = useNavigate();
  const {
    setNewCourseName,
    newCourseName,
    setIsShowCreateModal,
    isShowCreateModal,
  } = useMentorManagement();

  const handleCreateCourse = () => {
    navigate(appRoute.MENTOR_COURSES);
  };

  return (
    <Modal
      open={isShowCreateModal}
      centered
      title="Create new course"
      onCancel={() => setIsShowCreateModal(false)}
      onOk={handleCreateCourse}
    >
      <Flex gap={16} vertical>
        <UploadThumbnail />
        <Input
          placeholder="Enter course name"
          value={newCourseName}
          onChange={(e) => setNewCourseName(e.target.value)}
        />
        <Input.TextArea
          placeholder="Enter description"
          // value=
          // onChange={(e) => setNewCourseName(e.target.value)}
          autoSize={{ minRows: 3, maxRows: 3 }}
        />
      </Flex>
    </Modal>
  );
};

export { CreateCourseModal };
