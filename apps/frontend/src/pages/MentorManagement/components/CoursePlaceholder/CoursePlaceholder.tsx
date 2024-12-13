import { Card, Flex, Input, Modal, PlusCircleOutlined } from '@/components';
import { appRoute } from '@/enums';
import { useNavigate, useState } from '@/hooks';

const CoursePlaceholder = () => {
  const [isShowModal, setIsShowModal] = useState(false);

  const navigate = useNavigate();

  const renderAddCourseModal = () => {
    return (
      <Modal
        title="Add New Course"
        centered
        open={isShowModal}
        onCancel={() => setIsShowModal(false)}
        onOk={() => navigate(appRoute.MENTOR_COURSES)}
      >
        <Input placeholder="Enter course name" />
      </Modal>
    );
  };

  return (
    <Card
      className="shadow-lg w-[24%] group h-full flex flex-col items-center justify-center bg-gray-200"
      hoverable
      onClick={() => setIsShowModal(true)}
    >
      <Flex justify="center" align="center" gap={8} vertical>
        <h1 className="text-center text-xl font-semibold text-gray-400">
          Add New Course
        </h1>
        <PlusCircleOutlined
          style={{ fontSize: 30 }}
          className="text-gray-400"
        />
        {renderAddCourseModal()}
      </Flex>
    </Card>
  );
};

export { CoursePlaceholder };
