import { appRoute } from '@/enums';
import { useCreateNoteData } from '@/hooks';
import { NoteStore, useNote } from '@/stores';
import { getUsername } from '@/utils';
import { Input, Modal } from 'antd';
import { useState } from 'react';
import { useNavigate } from 'react-router';

const CreateNote = () => {
  const { isShowCreateModal, setIsShowCreateModal, setNote } = useNote();
  const [title, setTitle] = useState('');
  const navigate = useNavigate();

  const afterCreateNote = (newNote: NoteStore) => {
    setNote(newNote);
    navigate(`${appRoute.NOTES}/${newNote.id}`);
  };

  const { mutate } = useCreateNoteData(afterCreateNote);

  const handleCreateNote = () => {
    const username = getUsername();
    const noteData = {
      title,
      contents: '',
      user_username: username,
    };
    mutate(noteData);
    setIsShowCreateModal(false);
    setTitle('');
  };

  return (
    <Modal
      title="Create a new note"
      open={isShowCreateModal}
      onOk={handleCreateNote}
      onCancel={() => setIsShowCreateModal(false)}
      onClose={() => setIsShowCreateModal(false)}
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
