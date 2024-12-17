import { ArrowLeftOutlined, CustomQuill } from '@/components';
import { appRoute } from '@/enums';
import { useDetailNoteData } from '@/hooks';
import { useNote } from '@/stores';
import { Button, Flex } from 'antd';
import { Link, useParams } from 'react-router';

const DetailNote = () => {
  const { note } = useNote();
  const { noteId } = useParams();

  useDetailNoteData(Number(noteId));

  return (
    <Flex className="w-full px-10 mt-10 h-full" gap={16} vertical>
      <Flex align="center" gap={16}>
        <Link to={appRoute.NOTES}>
          <Button type="text" icon={<ArrowLeftOutlined />} />
        </Link>
        <h1 className="text-2xl font-semibold">{note.title}</h1>
      </Flex>
      <CustomQuill children className="w-full h-3/4" />
    </Flex>
  );
};
export { DetailNote };
