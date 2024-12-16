import { create } from 'zustand';
import { NoteStore } from './models';

interface StoreState {
  note: NoteStore;
  notes: NoteStore[];
  setNote: (note: NoteStore) => void;
  setNotes: (notes: NoteStore[]) => void;
  isShowCreateModal: boolean;
  newId?: number;
  setNewId: (id: number | undefined) => void;
  setIsShowCreateModal: (status: boolean) => void;
}

const useNote = create<StoreState>((set) => ({
  note: { user_username: '', title: '', contents: '' },
  notes: [],
  isShowCreateModal: false,
  newId: undefined,
  setNewId: (id: number | undefined) => set({ newId: id }),
  setIsShowCreateModal: (status: boolean) => set({ isShowCreateModal: status }),
  setNote: (note: NoteStore) => set({ note }),
  setNotes: (notes: NoteStore[]) => set({ notes }),
}));

export { useNote };
