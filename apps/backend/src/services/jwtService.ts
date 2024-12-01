import jwt from 'jsonwebtoken';

type PayloadType = {
  username: string;
  role: string;
  iat: number;
  exp: number;
  isValid: boolean;
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

  verifyToken(token: string): PayloadType {
    try {
      const decoded = jwt.verify(
        token,
        process.env.SECRET_KEY || '',
      ) as PayloadType;
      return { ...decoded, isValid: true };
    } catch {
      return {
        username: '',
        role: '',
        iat: 0,
        exp: 0,
        isValid: false,
      };
    }
  }
}

export { JwtService };
