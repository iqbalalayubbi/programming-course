import { create } from 'zustand';
import { DEFAULT_COURSE_DATA } from './constants';
import { CourseStore } from './models';

interface StoreState {
  course: CourseStore;
  courses: CourseStore[];
  search: string;
  defaultCourses: CourseStore[];
  setdefaultCourses: (newCourses: CourseStore[]) => void;
  setSearch: (value: string) => void;
  setCourseData: (data: CourseStore) => void;
  setCoursesData: (data: CourseStore[]) => void;
}

const useCourse = create<StoreState>((set) => ({
  course: DEFAULT_COURSE_DATA,
  courses: [],
  search: '',
  defaultCourses: [],
  setdefaultCourses: (newCourses: CourseStore[]) =>
    set({ defaultCourses: newCourses }),
  setSearch: (value: string) => set({ search: value }),
  setCourseData: (newCourse: CourseStore) => set({ course: newCourse }),
  setCoursesData: (newCourses: CourseStore[]) => set({ courses: newCourses }),
}));

export { useCourse };
