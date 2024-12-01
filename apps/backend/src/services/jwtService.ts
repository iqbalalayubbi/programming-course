import jwt from 'jsonwebtoken';

type PayloadType = {
  username: string;
  role: string;
  iat: number;
  exp: number;
};

class JwtService {
  generateAccessToken(username: string, role: string): string {
    const accessToken = jwt.sign(
      { username, role },
      process.env.SECRET_KEY || '',
      {
        expiresIn: '1800s',
      },
    );
    return accessToken;
  }

  verifyToken(token: string): PayloadType | boolean {
    try {
      const decoded = jwt.verify(
        token,
        process.env.SECRET_KEY || '',
      ) as PayloadType;
      return decoded;
    } catch {
      return false;
    }
  }
}

export { JwtService };
