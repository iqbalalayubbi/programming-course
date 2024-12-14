import { apiPath } from '@/enums';
import { ApiService } from './apiService';
import { formatResponse } from '@/utils';
import { type FormatResponseType } from '@/types';
import { AxiosError, AxiosResponse } from 'axios';

class CourseContentApi extends ApiService {
  public async createCourseContent(
    courseId: number,
    data: object,
  ): Promise<FormatResponseType | AxiosError> {
    try {
      const response = await this.post(
        `${apiPath.COURSE_CONTENTS}/${courseId}`,
        data,
      );
      return formatResponse(response as AxiosResponse);
    } catch (error) {
      throw error as AxiosError;
    }
  }

  public async updateCourseContent(
    courseContentId: number,
    data: object,
  ): Promise<FormatResponseType | AxiosError> {
    try {
      const response = await this.patch(
        `${apiPath.COURSE_CONTENTS}/${courseContentId}`,
        data,
      );
      return formatResponse(response as AxiosResponse);
    } catch (error) {
      throw error as AxiosError;
    }
  }

  public async getCourseContentsByPage(
    courseId: number,
    page: number,
  ): Promise<FormatResponseType | AxiosError> {
    try {
      const response = await this.get(
        `${apiPath.COURSE_CONTENTS}?courseId=${courseId}&page=${page}`,
      );
      return formatResponse(response as AxiosResponse);
    } catch (error) {
      throw error as AxiosError;
    }
  }

  public async getAllCourseContents(
    courseId: number,
  ): Promise<FormatResponseType | AxiosError> {
    try {
      const response = await this.get(`${apiPath.COURSE_CONTENTS}/${courseId}`);
      return formatResponse(response as AxiosResponse);
    } catch (error) {
      throw error as AxiosError;
    }
  }
}

export { CourseContentApi };
