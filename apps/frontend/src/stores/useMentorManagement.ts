import { create } from 'zustand';

type NewCourseData = {
  id?: number;
  title: string;
  description: string;
  selectedImage: File | null;
  imageUrl?: string;
};

interface StoreState {
  isShowCreateModal: boolean;
  newCourseName: string;
  newCourseData: NewCourseData;
  setNewCourseName: (name: string) => void;
  setIsShowCreateModal: (status: boolean) => void;
  setNewCourseData: (data: NewCourseData) => void;
}

const useMentorManagement = create<StoreState>((set) => ({
  isShowCreateModal: false,
  newCourseName: '',
  newCourseData: {
    id: undefined,
    title: '',
    description: '',
    selectedImage: null,
    imageUrl: undefined,
  },
  setNewCourseData: (data: NewCourseData) => set({ newCourseData: data }),
  setNewCourseName: (name: string) => set({ newCourseName: name }),
  setIsShowCreateModal: (status: boolean) => set({ isShowCreateModal: status }),
}));

export { useMentorManagement };
