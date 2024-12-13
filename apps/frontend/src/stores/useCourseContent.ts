import { create } from 'zustand';
import { DEFAULT_COURSE_CONTENT_DATA } from './constants';
import { CourseContent } from './models';

interface StoreState {
  courseContent: CourseContent;
  courseContents: CourseContent[];
  setCourseContentData: (data: CourseContent) => void;
  setCoursesContentsData: (data: CourseContent[]) => void;
}

const useCourseContent = create<StoreState>((set) => ({
  courseContent: DEFAULT_COURSE_CONTENT_DATA,
  courseContents: [],
  setCourseContentData: (newContent: CourseContent) =>
    set({ courseContent: newContent }),
  setCoursesContentsData: (newContents: CourseContent[]) =>
    set({ courseContents: newContents }),
}));

export { useCourseContent };
