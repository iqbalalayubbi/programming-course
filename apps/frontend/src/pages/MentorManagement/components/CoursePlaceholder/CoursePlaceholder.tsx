import { Card, Flex, PlusCircleOutlined } from '@/components';
import { useMentorManagement } from '@/stores';

const CoursePlaceholder = () => {
  const { setIsShowCreateModal } = useMentorManagement();

  return (
    <Card
      className="shadow-lg w-[24%] group h-full flex flex-col items-center justify-center bg-gray-200"
      hoverable
      onClick={() => setIsShowCreateModal(true)}
    >
      <Flex justify="center" align="center" gap={8} vertical>
        <h1 className="text-center text-xl font-semibold text-gray-400">
          Add New Course
        </h1>
        <PlusCircleOutlined
          style={{ fontSize: 30 }}
          className="text-gray-400"
        />
      </Flex>
    </Card>
  );
};

export { CoursePlaceholder };
