import { create } from 'zustand';
import { NoteStore } from './models';

interface StoreState {
  note: NoteStore;
  notes: NoteStore[];
  setNote: (note: NoteStore) => void;
  setNotes: (notes: NoteStore[]) => void;
}

const useNote = create<StoreState>((set) => ({
  note: { user_username: '', title: '', contents: '' },
  notes: [],
  setNote: (note: NoteStore) => set({ note }),
  setNotes: (notes: NoteStore[]) => set({ notes }),
}));

export { useNote };
