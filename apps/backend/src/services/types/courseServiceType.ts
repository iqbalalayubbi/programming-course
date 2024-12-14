import { CourseModel } from '@/models';
import { ServiceResponse } from './serviceResponseType';

type CourseServiceType = {
  create(data: CourseModel): Promise<ServiceResponse>;
  update(id: number, data: CourseModel): Promise<ServiceResponse>;
  getAll(): Promise<ServiceResponse>;
  getById(id: number): Promise<ServiceResponse>;
  updateThumbnail(id: number, filename: string): Promise<ServiceResponse>;
};

export { CourseServiceType };
