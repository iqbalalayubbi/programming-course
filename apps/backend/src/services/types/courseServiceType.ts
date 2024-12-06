import { CourseModel } from '@/models';
import { ServiceResponse } from './serviceResponseType';

type CourseServiceType = {
  create(data: CourseModel): Promise<ServiceResponse>;
  update(id: number, data: CourseModel): Promise<ServiceResponse>;
  getAll(): Promise<ServiceResponse>;
};

export { CourseServiceType };
