import { apiPath } from '@/enums';
import { ApiService } from './apiService';

type RegisterPayload = {
  username: string;
  email: string;
  password: string;
  role: 'student' | 'mentor';
};

class AuthApi extends ApiService {
  public async register(data: RegisterPayload) {
    try {
      const response = await this.post(apiPath.AUTH.REGISTER, data);
      return response;
    } catch (error) {
      return error;
    }
  }
}

export { AuthApi };
