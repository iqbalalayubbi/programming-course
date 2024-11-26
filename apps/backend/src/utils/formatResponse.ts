import { Response } from 'express';

type ResponseType = {
  res: Response;
  statusCode: number;
  message: string;
  data: object;
};

const formatResponse = ({ res, statusCode, message, data }: ResponseType) => {
  const isSuccess = statusCode === 200 || statusCode === 201;
  res.status(statusCode).json({ success: isSuccess, message, data });
};

export { formatResponse };
