import { CourseContentModel } from '@/models';
import { ServiceResponse } from './serviceResponseType';

type CourseContentServiceType = {
  create(courseId: number, data: CourseContentModel): Promise<ServiceResponse>;
  update(
    courseContentId: number,
    data: CourseContentModel,
  ): Promise<ServiceResponse>;
};

export { CourseContentServiceType };
