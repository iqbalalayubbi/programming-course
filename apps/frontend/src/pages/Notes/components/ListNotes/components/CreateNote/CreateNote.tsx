import { appRoute } from '@/enums';
import { useCreateNoteData } from '@/hooks';
import { useNote } from '@/stores';
import { getUsername } from '@/utils';
import { Input, Modal } from 'antd';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router';

const CreateNote = () => {
  const { isShowCreateModal, note, setIsShowCreateModal, newId } = useNote();
  const [title, setTitle] = useState('');
  const { mutate } = useCreateNoteData();
  const navigate = useNavigate();

  const handleCreateNote = () => {
    const username = getUsername();
    console.log('before create note');
    mutate({ ...note, title, user_username: username });
    console.log(note);
    setIsShowCreateModal(false);
    setTitle('');
  };

  useEffect(() => {
    if (newId) {
      navigate(`${appRoute.NOTES}/${newId}`);
    }
  }, [newId, navigate]);

  return (
    <Modal
      title="Create a new note"
      open={isShowCreateModal}
      onOk={handleCreateNote}
    >
      <Input
        placeholder="Enter note title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
    </Modal>
  );
};

export { CreateNote };
