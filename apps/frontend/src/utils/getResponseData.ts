import { AxiosError, FormatResponseType } from '@/types';
import { AxiosResponse } from 'axios';
import { ResponseApiType } from 'common';

const getResponseData = async (
  result: FormatResponseType | AxiosError,
): Promise<ResponseApiType | null> => {
  if (result instanceof AxiosError) {
    return null;
  }

  const response = result as unknown as AxiosResponse;
  const responseData = response.data as ResponseApiType;
  return responseData;
};

export { getResponseData };
