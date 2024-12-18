import { apiPath } from '@/enums';
import { ApiService } from './apiService';
import { formatResponse } from '@/utils';
import { type FormatResponseType } from '@/types';
import { AxiosError, AxiosResponse } from 'axios';
import { ChallengeSubmissionStore } from '@/stores';

class ChallengeSubmissionApi extends ApiService {
  public async submitChallenge(
    data: ChallengeSubmissionStore,
  ): Promise<FormatResponseType | AxiosError> {
    try {
      const response = await this.post(
        `${apiPath.CHALLENGE_SUBMISSIONS}`,
        data,
      );
      return formatResponse(response as AxiosResponse);
    } catch (error) {
      throw error as AxiosError;
    }
  }

  public async getByUsername(
    username: string,
  ): Promise<FormatResponseType | AxiosError> {
    try {
      const response = await this.get(
        `${apiPath.CHALLENGE_SUBMISSIONS}?username=${username}`,
      );
      return formatResponse(response as AxiosResponse);
    } catch (error) {
      throw error as AxiosError;
    }
  }
}

export { ChallengeSubmissionApi };
