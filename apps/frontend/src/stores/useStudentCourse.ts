import { create } from 'zustand';
import { StudentCourseStore, UserStore } from './models';

interface StoreState {
  studentCourses: StudentCourseStore[];
  usersInCourse: UserStore[];
  setUsersInCourse: (users: UserStore[]) => void;
  setStudentCourses: (studentCourses: StudentCourseStore[]) => void;
}

const useStudentCourse = create<StoreState>((set) => ({
  studentCourses: [],
  usersInCourse: [],
  setUsersInCourse: (newUsers: UserStore[]) => set({ usersInCourse: newUsers }),
  setStudentCourses: (newStudentCourses: StudentCourseStore[]) =>
    set({ studentCourses: newStudentCourses }),
}));

export { useStudentCourse };
