import { apiPath } from '@/enums';
import { ApiService } from './apiService';
import { formatResponse } from '@/utils';
import { type FormatResponseType } from '@/types';
import { AxiosError, AxiosResponse } from 'axios';
import { JoinCoursePayload } from 'common';

class StudentCourseApi extends ApiService {
  public async joinCourse(
    data: JoinCoursePayload,
  ): Promise<FormatResponseType | AxiosError> {
    try {
      const response = await this.post(`${apiPath.STUDENT_COURSES}`, data);
      return formatResponse(response as AxiosResponse);
    } catch (error) {
      throw error as AxiosError;
    }
  }

  public async getStudentCourses(
    username: string,
  ): Promise<FormatResponseType | AxiosError> {
    try {
      const response = await this.get(
        `${apiPath.STUDENT_COURSES}?username=${username}`,
      );
      return formatResponse(response as AxiosResponse);
    } catch (error) {
      throw error as AxiosError;
    }
  }
}

export { StudentCourseApi };
