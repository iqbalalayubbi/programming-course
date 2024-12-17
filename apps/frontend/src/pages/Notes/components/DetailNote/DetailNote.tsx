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
  SaveOutlined,
} from '@/components';
import { appRoute, colorPalette } from '@/enums';
import {
  useDetailNoteData,
  useMutation,
  useNavigate,
  useParams,
  useUpdateNote,
} from '@/hooks';
import { useNote, useQuill } from '@/stores';

const DetailNote = () => {
  const { note } = useNote();
  const { noteId } = useParams();
  const { value } = useQuill();

  const navigate = useNavigate();

  useDetailNoteData(Number(noteId));

  const { mutate: deleteMutate } = useMutation({
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

  const handleReponseUpdate = (isSuccess: boolean) => {
    if (isSuccess) {
      return toast.success('Note updated successfully');
    }
    return toast.error('Error updating note');
  };

  const { mutate: updateMutate } = useUpdateNote(handleReponseUpdate);

  const handleDeleteNote = (id: number) => {
    deleteMutate(id);
    navigate(appRoute.NOTES);
  };

  const onDelete = () => {
    Modal.confirm({
      title: 'Are you sure you want to delete this note?',
      icon: <DeleteOutlined />,
      okText: 'Yes',
      cancelText: 'No',
      onOk: () => handleDeleteNote(Number(noteId)),
    });
  };

  const handleUpdateNote = () => {
    const newData = {
      title: note.title,
      user_username: note.user_username,
      contents: value,
    };
    updateMutate({ id: note.id as number, data: newData });
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
      <FloatButton.Group shape="circle" style={{ insetInlineEnd: 24 }}>
        <FloatButton
          icon={<DeleteOutlined style={{ color: 'red' }} />}
          onClick={onDelete}
          tooltip="Delete Note"
          type="default"
          style={{ insetInlineEnd: 128 }}
        />
        <FloatButton
          icon={<SaveOutlined style={{ color: colorPalette.DARK_TEXT }} />}
          onClick={handleUpdateNote}
          tooltip="Save Note"
          type="default"
          style={{ insetInlineEnd: 64 }}
        />
      </FloatButton.Group>
    </Flex>
  );
};
export { DetailNote };
