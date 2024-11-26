import jwt from 'jsonwebtoken';

type PayloadType = {
  username: string;
  role: string;
  iat: number;
  exp: number;
};

const verifyToken = (token: string) => {
  try {
    const decoded = jwt.verify(
      token,
      process.env.SECRET_KEY || '',
    ) as PayloadType;
    return decoded;
  } catch {
    return false;
  }
};

export { verifyToken };
