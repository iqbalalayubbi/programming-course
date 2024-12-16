import { noteApi } from '@/api';
import { useMutation } from '@/hooks';
import { NoteStore, useNote } from '@/stores';
import { getResponseData } from '@/utils';

const useCreateNoteData = () => {
  const { setNewId } = useNote();

  const { isSuccess, ...queryStates } = useMutation({
    mutationKey: ['create-note'],
    mutationFn: async (newData: NoteStore) => {
      const result = await noteApi.createNote(newData);
      const response = await getResponseData(result);
      if (response?.data) {
        setNewId(Number(response.data.note?.id));
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
