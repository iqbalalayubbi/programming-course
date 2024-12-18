import { apiPath } from '@/enums';
import { ApiService } from './apiService';
import { formatResponse } from '@/utils';
import { type FormatResponseType } from '@/types';
import { AxiosError, AxiosResponse } from 'axios';

class UserApi extends ApiService {
  public async orderUsersByPoint(): Promise<FormatResponseType | AxiosError> {
    try {
      const response = await this.get(apiPath.USERS);
      return formatResponse(response as AxiosResponse);
    } catch (error) {
      throw error as AxiosError;
    }
  }
}

export { UserApi };
