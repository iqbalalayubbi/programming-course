import { BaseStorage } from './baseStorage';

class UserDataStorage extends BaseStorage {
  private key: string;

  constructor(key: string) {
    super();
    this.key = key;
  }

  saveAccessToken(accessToken: string) {
    return this.set(this.key, accessToken);
  }

  getAccessToken() {
    const accessToken = this.get(this.key);
    return accessToken;
  }
}

export { UserDataStorage };
