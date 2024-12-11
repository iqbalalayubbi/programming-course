import { apiPath } from '@/enums';
import { ApiService } from './apiService';
import { AxiosError, AxiosResponse } from 'axios';

type RegisterPayload = {
  username: string;
  email: string;
  password: string;
  role: 'student' | 'mentor';
};

class AuthApi extends ApiService {
  public async register(
    data: RegisterPayload,
  ): Promise<AxiosResponse | AxiosError> {
    try {
      const response = await this.post(apiPath.AUTH.REGISTER, data);
      return response;
    } catch (error) {
      const axiosError = error as AxiosError;
      throw axiosError.response?.data;
    }
  }
}

export { AuthApi };
