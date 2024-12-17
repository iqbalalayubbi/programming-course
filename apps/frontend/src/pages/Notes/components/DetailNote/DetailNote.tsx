import { noteApi } from '@/api';
import {
  ArrowLeftOutlined,
  CustomQuill,
  toast,
  ToastContainer,
  Link,
  Button,
  Flex,
  FloatButton,
  Modal,
  DeleteOutlined,
} from '@/components';
import { appRoute } from '@/enums';
import {
  useDetailNoteData,
  useMutation,
  useNavigate,
  useParams,
} from '@/hooks';
import { useNote } from '@/stores';

const DetailNote = () => {
  const { note } = useNote();
  const { noteId } = useParams();
  const navigate = useNavigate();

  useDetailNoteData(Number(noteId));

  const { mutate } = useMutation({
    mutationKey: ['deleteNote'],
    mutationFn: async (id: number) => {
      await noteApi.deleteNoteById(id);
    },
    onSuccess: () => {
      toast.success('Note deleted successfully');
    },
    onError: () => {
      toast.error('Error deleting');
    },
  });

  const handleDeleteNote = (id: number) => {
    mutate(id);
    navigate(appRoute.NOTES);
  };

  const onDelete = () => {
    // Implement delete note logic
    Modal.confirm({
      title: 'Are you sure you want to delete this note?',
      icon: <DeleteOutlined />,
      okText: 'Yes',
      cancelText: 'No',
      onOk: () => handleDeleteNote(Number(noteId)),
    });
  };

  return (
    <Flex className="w-full px-10 mt-10 h-full" gap={16} vertical>
      <ToastContainer />
      <Flex align="center" gap={16}>
        <Link to={appRoute.NOTES}>
          <Button type="text" icon={<ArrowLeftOutlined />} />
        </Link>
        <h1 className="text-2xl font-semibold">{note.title}</h1>
      </Flex>
      <CustomQuill children className="w-full h-3/4" />
      <FloatButton
        icon={<DeleteOutlined style={{ color: 'red' }} />}
        onClick={onDelete}
        tooltip="Delete Note"
        type="default"
        style={{ insetInlineEnd: 64 }}
      />
    </Flex>
  );
};
export { DetailNote };
