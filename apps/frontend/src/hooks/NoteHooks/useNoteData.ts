import { noteApi } from '@/api';
import { useQuery, useCallback, useEffect } from '@/hooks';
import { AxiosResponse } from 'axios';
import { FormatResponseType, AxiosError } from '@/types';
import { ResponseApiType } from 'common';
import { NoteStore, useNote } from '@/stores';

const useNoteData = (username: string) => {
  const { setNotes, ...noteStore } = useNote();

  const getNotesByUsername = useCallback(
    async (result: FormatResponseType | AxiosError) => {
      if (result instanceof AxiosError) {
        return null;
      }

      const response = result as unknown as AxiosResponse;
      const responseData = response.data as ResponseApiType;
      const notes = responseData.data?.notes as unknown as NoteStore[];
      setNotes(notes);
    },
    [setNotes],
  );

  const { data: noteResponse, ...queryStates } = useQuery({
    queryKey: ['get-notes-by-username'],
    queryFn: async () => {
      const response = await noteApi.getNotesByUsername(username);
      return response;
    },
  });

  useEffect(() => {
    if (noteResponse) {
      getNotesByUsername(noteResponse);
    }
  }, [noteResponse, getNotesByUsername]);

  return {
    noteResponse,
    ...queryStates,
    ...noteStore,
  };
};

export { useNoteData };
