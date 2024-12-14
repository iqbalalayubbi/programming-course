import { create } from 'zustand';

type NewCourseData = {
  id?: number;
  title: string;
  description: string;
  videoUrl: string;
  selectedImage: File | null;
  imageUrl?: string;
};

interface StoreState {
  isShowCreateModal: boolean;
  newCourseName: string;
  newCourseData: NewCourseData;
  isCreateCourse: boolean;
  setIsCreateCourse: (status: boolean) => void;
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
    videoUrl: '',
    imageUrl: undefined,
  },
  isCreateCourse: false,
  setIsCreateCourse: (status: boolean) => set({ isCreateCourse: status }),
  setNewCourseData: (data: NewCourseData) => set({ newCourseData: data }),
  setNewCourseName: (name: string) => set({ newCourseName: name }),
  setIsShowCreateModal: (status: boolean) => set({ isShowCreateModal: status }),
}));

export { useMentorManagement };
