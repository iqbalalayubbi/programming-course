import { Response } from 'express';

type ResponseType = {
  res: Response;
  statusCode: number;
  message: string;
  data?: object;
};

type ResponseJsonType = {
  success: boolean;
  message: string;
  data?: object;
};

const formatResponse = ({ res, statusCode, message, data }: ResponseType) => {
  const isSuccess = statusCode === 200 || statusCode === 201;
  const jsonResponse: ResponseJsonType = { success: isSuccess, message };
  if (data) {
    jsonResponse.data = data;
  }
  res.status(statusCode).json(jsonResponse);
};

export { formatResponse };
