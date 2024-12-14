import { apiPath } from '@/enums';
import { ApiService } from './apiService';
import { formatResponse } from '@/utils';
import { type FormatResponseType } from '@/types';
import { AxiosError, AxiosResponse } from 'axios';

class CourseContentApi extends ApiService {
  public async createCourseContent(
    courseId: string,
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
}

export { CourseContentApi };