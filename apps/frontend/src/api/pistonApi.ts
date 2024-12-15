import { ApiService } from './apiService';
import { AxiosError } from 'axios';

type ExecuteCodeType = {
  language: string;
  version: string;
  code: string;
};

class PistonApi extends ApiService {
  private BASE_URL: string;

  constructor() {
    super();
    this.BASE_URL = import.meta.env.VITE_BASE_PISTON_API;
  }

  public async getRuntimes() {
    try {
      const response = await this.get(`${this.BASE_URL}/runtimes`);
      return response;
    } catch (error) {
      throw error as AxiosError;
    }
  }

  public async executeCode({ language, version, code }: ExecuteCodeType) {
    try {
      const response = await this.post(`${this.BASE_URL}/execute`, {
        language,
        version,
        files: [
          {
            content: code,
          },
        ],
      });
      return response;
    } catch (error) {
      throw error as AxiosError;
    }
  }
}

export { PistonApi };
