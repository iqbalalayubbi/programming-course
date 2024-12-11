import { storageKey } from '@/enums';
import { UserDataStorage } from './userDataStorage';

const userDataStorage = new UserDataStorage(storageKey.USER_DATA);

export { userDataStorage };
