import { appRoute } from '@/enums';
import { useMentorManagement } from '@/stores';
import { Input, Modal } from '@/components';
import { useNavigate } from '@/hooks';

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
      <Input
        placeholder="Enter course name"
        value={newCourseName}
        onChange={(e) => setNewCourseName(e.target.value)}
      />
    </Modal>
  );
};

export { CreateCourseModal };
