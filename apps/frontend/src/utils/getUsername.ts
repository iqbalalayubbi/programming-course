import { userDataStorage } from '@/services';
import { decodeToken } from './decodeToken';

const getUsername = () => {
  const accessToken = userDataStorage.getAccessToken() as string;
  const { username } = decodeToken(accessToken);
  return username;
};

export { getUsername };
