class BaseStorage {
  public get(key: string): object | null {
    const userData = localStorage.getItem(key);
    return userData ? JSON.parse(userData) : null;
  }

  public set(key: string, value: object) {
    localStorage.setItem(key, JSON.stringify(value));
  }

  public delete(key: string) {
    localStorage.removeItem(key);
  }
}

export { BaseStorage };
