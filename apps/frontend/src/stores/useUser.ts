import { create } from 'zustand';
import { DEFAULT_USER_DATA } from './constants';

type UserDataType = {
  username: string;
  role: string;
  email?: string;
  surename?: string;
  birthdate?: string;
  country?: string;
  image_id?: number;
  phone_number?: string;
  total_points?: number;
  description?: string;
};

interface StoreState {
  user: UserDataType;
  setUserData: (data: UserDataType) => void;
}

const useUser = create<StoreState>((set) => ({
  user: DEFAULT_USER_DATA,
  setUserData: (newUser: UserDataType) =>
    set((state) => {
      if (state.user !== newUser) {
        return { user: newUser };
      }
      return state;
    }),
}));

export { useUser };
