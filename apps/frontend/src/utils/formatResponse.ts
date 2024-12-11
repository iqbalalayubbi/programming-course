import { AxiosResponse } from 'axios';
import { ResponseApiType } from 'common';

type ResponseType = {
  statusCode: number;
  data: ResponseApiType;
};

const formatResponse = (response: AxiosResponse): ResponseType => {
  return {
    statusCode: response.status as number,
    data: response.data as ResponseApiType,
  };
};

export { formatResponse };
