import { create } from 'zustand';

interface StoreState {
  value: string;
  setValue: (newVal: string) => void;
}

const useQuill = create<StoreState>((set) => ({
  value: '',
  setValue: (newVal: string) => set({ value: newVal }),
}));

export { useQuill };
