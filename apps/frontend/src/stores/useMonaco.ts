import { create } from 'zustand';

interface StoreState {
  value: string;
  setValue: (newVal: string) => void;
  output: string;
  setOutput: (newVal: string) => void;
}

const useMonaco = create<StoreState>((set) => ({
  value: '',
  output: '',
  setOutput: (newVal: string) => set({ output: newVal }),
  setValue: (newVal: string) => set({ value: newVal }),
}));

export { useMonaco };
