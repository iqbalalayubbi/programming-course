import { CourseContentModel } from '@/models';
import { ServiceResponse } from './serviceResponseType';

type CourseContentServiceType = {
  create(courseId: number, data: CourseContentModel): Promise<ServiceResponse>;
  update(
    courseContentId: number,
    data: CourseContentModel,
  ): Promise<ServiceResponse>;
  getByPage(courseId: number, page: number): Promise<ServiceResponse>;
  getAllContents(courseId: number): Promise<ServiceResponse>;
  updateVideo(id: number, filename: string): Promise<ServiceResponse>;
};

export { CourseContentServiceType };
