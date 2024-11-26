import { Response } from 'express';

type Error = {
  field: string;
  message: string;
};

type ResponseType = {
  res: Response;
  statusCode: number;
  message: string;
  data?: object;
  errors?: Error[];
};

type ResponseJsonType = {
  success: boolean;
  message: string;
  data?: object;
  errors?: Error[];
};

const formatResponse = ({
  res,
  statusCode,
  message,
  data,
  errors,
}: ResponseType) => {
  const isSuccess = statusCode === 200 || statusCode === 201;
  const jsonResponse: ResponseJsonType = { success: isSuccess, message };

  if (data) {
    jsonResponse.data = data;
  }

  if (errors) {
    jsonResponse.errors = errors;
  }

  res.status(statusCode).json(jsonResponse);
};

export { formatResponse };
