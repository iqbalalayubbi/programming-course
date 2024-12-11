import { apiPath } from '@/enums';
import { ApiService } from './apiService';
import { formatResponse } from '@/utils';
import { type FormatResponseType } from '@/types';
import { AxiosError, AxiosResponse } from 'axios';
import { LoginPayload } from 'common';

type RegisterPayload = {
  username: string;
  email: string;
  password: string;
  role: 'student' | 'mentor';
};

class AuthApi extends ApiService {
  public async register(
    data: RegisterPayload,
  ): Promise<FormatResponseType | AxiosError> {
    try {
      const response = await this.post(apiPath.AUTH.REGISTER, data);
      return formatResponse(response as AxiosResponse);
    } catch (error) {
      throw error as AxiosError;
    }
  }

  public async verifyEmail(
    token: string,
  ): Promise<FormatResponseType | AxiosError> {
    try {
      const response = await this.get(`${apiPath.AUTH.VERIFY_EMAIL}/${token}`);
      return formatResponse(response as AxiosResponse);
    } catch (error) {
      throw error as AxiosError;
    }
  }

  public async login(
    data: LoginPayload,
  ): Promise<FormatResponseType | AxiosError> {
    try {
      const response = await this.post(apiPath.AUTH.LOGIN, data);
      return formatResponse(response as AxiosResponse);
    } catch (error) {
      throw error as AxiosError;
    }
  }
}

export { AuthApi };
