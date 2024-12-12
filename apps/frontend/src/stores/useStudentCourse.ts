import { create } from 'zustand';
import { StudentCourseStore } from './models';

interface StoreState {
  studentCourses: StudentCourseStore[];
  setStudentCourses: (studentCourses: StudentCourseStore[]) => void;
}

const useStudentCourse = create<StoreState>((set) => ({
  studentCourses: [],
  setStudentCourses: (newStudentCourses: StudentCourseStore[]) =>
    set({ studentCourses: newStudentCourses }),
}));

export { useStudentCourse };
