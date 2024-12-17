import { create } from 'zustand';
import { NoteStore } from './models';

interface StoreState {
  note: NoteStore;
  notes: NoteStore[];
  setNote: (note: NoteStore) => void;
  setNotes: (notes: NoteStore[]) => void;
  isShowCreateModal: boolean;
  setIsShowCreateModal: (status: boolean) => void;
}

const useNote = create<StoreState>((set) => ({
  note: { user_username: '', title: '', contents: '' },
  notes: [],
  isShowCreateModal: false,
  setIsShowCreateModal: (status: boolean) => set({ isShowCreateModal: status }),
  setNote: (note: NoteStore) => set({ note }),
  setNotes: (notes: NoteStore[]) => set({ notes }),
}));

export { useNote };
