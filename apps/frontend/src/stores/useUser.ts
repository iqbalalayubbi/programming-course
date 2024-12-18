import { create } from 'zustand';
import { DEFAULT_USER_DATA } from './constants';
import { UserStore } from './models';

interface StoreState {
  user: UserStore;
  users: UserStore[];
  isJoined: boolean;
  setUserData: (data: UserStore) => void;
  setUsersData: (data: UserStore[]) => void;
  setJoined: (status: boolean) => void;
}

const useUser = create<StoreState>((set) => ({
  user: DEFAULT_USER_DATA,
  users: [],
  isJoined: false,
  setUsersData: (data: UserStore[]) => set({ users: data }),
  setUserData: (newUser: UserStore) =>
    set((state) => {
      if (state.user !== newUser) {
        return { user: newUser };
      }
      return state;
    }),
  setJoined: (status: boolean) => set({ isJoined: status }),
}));

export { useUser };
