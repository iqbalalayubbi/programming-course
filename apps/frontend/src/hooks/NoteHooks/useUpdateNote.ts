import { noteApi } from '@/api';
import { NoteStore } from '@/stores';
import { useMutation } from '@tanstack/react-query';

const useUpdateNote = (onFinish: (isSuccess: boolean) => void) => {
  const { ...queryStates } = useMutation({
    mutationKey: ['update-note'],
    mutationFn: async (payload: { id: number; data: NoteStore }) => {
      await noteApi.updateNote(payload.id, payload.data);
    },
    onSuccess: () => {
      onFinish(true);
    },
    onError: () => {
      onFinish(false);
    },
  });

  return {
    ...queryStates,
  };
};

export { useUpdateNote };
