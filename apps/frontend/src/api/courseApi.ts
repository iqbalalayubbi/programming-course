import { apiPath } from '@/enums';
import { ApiService } from './apiService';
import { formatResponse } from '@/utils';
import { type FormatResponseType } from '@/types';
import { AxiosError, AxiosResponse } from 'axios';

class CourseApi extends ApiService {
  public async getAllCourses(): Promise<FormatResponseType | AxiosError> {
    try {
      const response = await this.get(apiPath.COURSES);
      return formatResponse(response as AxiosResponse);
    } catch (error) {
      throw error as AxiosError;
    }
  }
}

export { CourseApi };
