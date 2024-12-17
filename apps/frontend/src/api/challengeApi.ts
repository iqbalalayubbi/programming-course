import { apiPath } from '@/enums';
import { ApiService } from './apiService';
import { formatResponse } from '@/utils';
import { type FormatResponseType } from '@/types';
import { AxiosError, AxiosResponse } from 'axios';

class ChallengeApi extends ApiService {
  public async getNotesByUsername(
    username: string,
  ): Promise<FormatResponseType | AxiosError> {
    try {
      const response = await this.get(
        `${apiPath.NOTES}?user_username=${username}`,
      );
      return formatResponse(response as AxiosResponse);
    } catch (error) {
      throw error as AxiosError;
    }
  }

  public async getChallenges(): Promise<FormatResponseType | AxiosError> {
    try {
      const response = await this.get(`${apiPath.CHALLENGES}`);
      return formatResponse(response as AxiosResponse);
    } catch (error) {
      throw error as AxiosError;
    }
  }
}

export { ChallengeApi };
