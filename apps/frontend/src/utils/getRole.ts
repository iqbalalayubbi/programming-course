import { userDataStorage } from '@/services';
import { decodeToken } from './decodeToken';

const getRole = () => {
  const accessToken = userDataStorage.getAccessToken() as string;
  const { role } = decodeToken(accessToken);
  return role;
};

export { getRole };
