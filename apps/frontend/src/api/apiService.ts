import axios, {
  AxiosError,
  AxiosInstance,
  AxiosRequestConfig,
  AxiosResponse,
  InternalAxiosRequestConfig,
} from 'axios';

class ApiService {
  private axiosInstance: AxiosInstance;

  constructor() {
    this.axiosInstance = axios.create({
      baseURL: import.meta.env.VITE_BASE_API,
      headers: {
        'Content-Type': 'application/json',
      },
    });

    this.axiosInstance.interceptors.request.use(
      (config: InternalAxiosRequestConfig) => {
        // Tambahkan token atau konfigurasi lain jika diperlukan
        // const token = localStorage.getItem('token');
        // if (token) {
        //   config.headers['Authorization'] = `Bearer ${token}`;
        // }
        return config;
      },
      (error) => {
        return Promise.reject(error);
      },
    );

    this.axiosInstance.interceptors.response.use(
      (response: AxiosResponse) => {
        return response;
      },
      (error) => {
        // Tangani kesalahan di sini
        return Promise.reject(error);
      },
    );
  }

  public async get(
    url: string,
    config?: AxiosRequestConfig,
  ): Promise<AxiosResponse> {
    const response = await this.axiosInstance.get(url, config);
    return response; // Mengembalikan data dari respons
  }

  public async post(
    url: string,
    data: object,
    config?: AxiosRequestConfig,
  ): Promise<AxiosResponse | AxiosError> {
    try {
      const response = await this.axiosInstance.post(url, data, config);
      return response;
    } catch (error) {
      throw error as AxiosError;
    }
  }

  public async put(
    url: string,
    data: object,
    config?: AxiosRequestConfig,
  ): Promise<AxiosResponse> {
    const response = await this.axiosInstance.put(url, data, config);
    return response; // Mengembalikan data dari respons
  }

  public async patch(
    url: string,
    data: object,
    config?: AxiosRequestConfig,
  ): Promise<AxiosResponse> {
    const response = await this.axiosInstance.patch(url, data, config);
    return response; // Mengembalikan data dari respons
  }

  public async delete(
    url: string,
    config?: AxiosRequestConfig,
  ): Promise<AxiosResponse> {
    const response = await this.axiosInstance.delete(url, config);
    return response; // Mengembalikan data dari respons
  }
}

export { ApiService };
