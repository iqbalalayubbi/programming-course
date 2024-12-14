import { apiPath } from '@/enums';
import { ApiService } from './apiService';
import { formatResponse } from '@/utils';
import { type FormatResponseType } from '@/types';
import { AxiosError, AxiosResponse } from 'axios';
import { CreateCoursePayload } from 'common';

class CourseApi extends ApiService {
  public async getAllCourses(): Promise<FormatResponseType | AxiosError> {
    try {
      const response = await this.get(apiPath.COURSES);
      return formatResponse(response as AxiosResponse);
    } catch (error) {
      throw error as AxiosError;
    }
  }

  public async getCourseDetail(
    courseId: number,
  ): Promise<FormatResponseType | AxiosError> {
    try {
      const response = await this.get(`${apiPath.COURSES}/${courseId}`);
      return formatResponse(response as AxiosResponse);
    } catch (error) {
      throw error as AxiosError;
    }
  }

  public async createCourse(
    data: CreateCoursePayload,
  ): Promise<FormatResponseType | AxiosError> {
    try {
      const response = await this.post(apiPath.COURSES, data);
      return formatResponse(response as AxiosResponse);
    } catch (error) {
      throw error as AxiosError;
    }
  }
}

export { CourseApi };
