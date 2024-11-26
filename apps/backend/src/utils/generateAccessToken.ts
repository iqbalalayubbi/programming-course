import jwt from 'jsonwebtoken';

type Payload = {
  username: string;
  role: string;
};

const generateAccessToken = ({ username, role }: Payload) => {
  return jwt.sign({ username, role }, process.env.SECRET_KEY || '', {
    expiresIn: '1800s',
  });
};

export { generateAccessToken };
