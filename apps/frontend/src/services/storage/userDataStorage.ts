import { BaseStorage } from './baseStorage';

class UserDataStorage extends BaseStorage {
  private key: string;

  constructor(key: string) {
    super();
    this.key = key;
  }
  saveUserData(userData: object) {
    this.set(this.key, userData);
  }

  getUserData() {
    return this.get(this.key);
  }
}

export { UserDataStorage };
