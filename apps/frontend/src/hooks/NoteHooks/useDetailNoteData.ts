import { noteApi } from '@/api';
import { NoteStore, useNote, useQuill } from '@/stores';
import { getResponseData } from '@/utils';
import { useQuery } from '@tanstack/react-query';

const useDetailNoteData = (noteId: number) => {
  const { setNote } = useNote();
  const { setValue } = useQuill();

  const { ...queryStates } = useQuery({
    queryKey: ['get-note-by-id'],
    queryFn: async () => {
      const result = await noteApi.getNoteById(noteId);
      const response = await getResponseData(result);
      if (response?.data) {
        const note = response.data.note as NoteStore;
        setValue(note.contents);
        setNote(note);
      }
      return response;
    },
  });

  return {
    ...queryStates,
  };
};

export { useDetailNoteData };
