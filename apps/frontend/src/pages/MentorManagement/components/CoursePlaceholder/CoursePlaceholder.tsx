import { Card, Flex, PlusCircleOutlined } from '@/components';
import { useMentorManagement } from '@/stores';

const CoursePlaceholder = () => {
  const { setIsShowCreateModal } = useMentorManagement();

  return (
    <Card
      className="shadow-lg w-full h-full group flex flex-col items-center justify-center bg-light-bg group"
      hoverable
      onClick={() => setIsShowCreateModal(true)}
    >
      <Flex justify="center" align="center" gap={16} vertical>
        <h1 className="text-center text-xl font-semibold text-gray-300 group-hover:text-slate-400 transition-all duration-300">
          Add New Course
        </h1>
        <PlusCircleOutlined
          style={{ fontSize: 30 }}
          className="text-gray-300 group-hover:text-slate-400 transition-all duration-300"
        />
      </Flex>
    </Card>
  );
};

export { CoursePlaceholder };
