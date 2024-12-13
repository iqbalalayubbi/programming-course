import { create } from 'zustand';

interface StoreState {
  isShowCreateModal: boolean;
  newCourseName: string;
  setNewCourseName: (name: string) => void;
  setIsShowCreateModal: (status: boolean) => void;
}

const useMentorManagement = create<StoreState>((set) => ({
  isShowCreateModal: false,
  newCourseName: '',
  setNewCourseName: (name: string) => set({ newCourseName: name }),
  setIsShowCreateModal: (status: boolean) => set({ isShowCreateModal: status }),
}));

export { useMentorManagement };
