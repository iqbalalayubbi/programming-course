import { BaseStorage } from './baseStorage';

class UserDataStorage extends BaseStorage {
  private key: string;

  constructor(key: string) {
    super();
    this.key = key;
  }
  async saveUserData(userData: object) {
    this.set(this.key, userData);
  }
}

export { UserDataStorage };
