import { apiPath } from '@/enums';
import { ApiService } from './apiService';
import { formatResponse } from '@/utils';
import { type FormatResponseType } from '@/types';
import { AxiosError, AxiosResponse } from 'axios';

class DashboardApi extends ApiService {
  public async getStudentCourses(
    username: string,
  ): Promise<FormatResponseType | AxiosError> {
    try {
      const response = await this.get(`${apiPath.DASHBOARD}/${username}`);
      return formatResponse(response as AxiosResponse);
    } catch (error) {
      throw error as AxiosError;
    }
  }
}

export { DashboardApi };
