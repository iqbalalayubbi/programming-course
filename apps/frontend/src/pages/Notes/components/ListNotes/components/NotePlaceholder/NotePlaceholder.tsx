import { useNote } from '@/stores';
import { PlusOutlined } from '@ant-design/icons';
import { Button, Flex } from 'antd';

const NotePlaceholder = () => {
  const { setIsShowCreateModal } = useNote();

  const onCreateNote = () => {
    setIsShowCreateModal(true);
  };

  return (
    <Flex
      justify="center"
      align="center"
      className="cursor-pointer shadow-md hover:bg-gray-200 bg-slate-50 transition-all duration-300"
      onClick={onCreateNote}
    >
      <Button
        icon={<PlusOutlined className="text-4xl text-gray-500" />}
        type="link"
      />
    </Flex>
  );
};

export { NotePlaceholder };
