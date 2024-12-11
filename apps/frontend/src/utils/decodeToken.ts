import { jwtDecode } from 'jwt-decode';

type PayloadType = {
  username: string;
  role: string;
  iat: number;
  exp: number;
  isValid: boolean;
};

const decodeToken = (token: string): PayloadType => {
  return jwtDecode(token);
};

export { decodeToken };
