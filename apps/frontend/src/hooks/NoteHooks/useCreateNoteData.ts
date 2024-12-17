import { noteApi } from '@/api';
import { useMutation } from '@/hooks';
import { NoteStore } from '@/stores';
import { getResponseData } from '@/utils';

const useCreateNoteData = (callback: (newData: NoteStore) => void) => {
  const { isSuccess, ...queryStates } = useMutation({
    mutationKey: ['create-note'],
    mutationFn: async (newData: NoteStore) => {
      const result = await noteApi.createNote(newData);
      const response = await getResponseData(result);
      if (response?.data) {
        const note = response.data.note as NoteStore;
        callback(note);
      }
      return result;
    },
  });

  return {
    ...queryStates,
    isSuccess,
  };
};

export { useCreateNoteData };
