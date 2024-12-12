import { apiPath } from '@/enums';
import { ApiService } from './apiService';
import { formatResponse } from '@/utils';
import { type FormatResponseType } from '@/types';
import { AxiosError, AxiosResponse } from 'axios';

class ProfileApi extends ApiService {
  public async getUser(): Promise<FormatResponseType | AxiosError> {
    try {
      const response = await this.get(apiPath.PROFILE);
      return formatResponse(response as AxiosResponse);
    } catch (error) {
      throw error as AxiosError;
    }
  }
}

export { ProfileApi };
