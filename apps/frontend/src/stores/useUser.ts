import { create } from 'zustand';

interface StoreState {
  username: string;
  role: string;
  setUserData: (data: { username: string; role: string }) => void;
  setUsername: (username: string) => void;
  setRole: (role: string) => void;
}

const useUser = create<StoreState>((set) => ({
  username: '',
  role: '',
  setUserData: ({ username, role }) => set({ username, role }),
  setUsername: (username: string) => set({ username }),
  setRole: (role: string) => set({ role }),
}));

export { useUser };
