import { create } from 'zustand';
import { DEFAULT_USER_DATA } from './constants';
import { UserStore } from './models';

interface StoreState {
  user: UserStore;
  setUserData: (data: UserStore) => void;
}

const useUser = create<StoreState>((set) => ({
  user: DEFAULT_USER_DATA,
  setUserData: (newUser: UserStore) =>
    set((state) => {
      if (state.user !== newUser) {
        return { user: newUser };
      }
      return state;
    }),
}));

export { useUser };
