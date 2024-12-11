class BaseStorage {
  public get(key: string) {
    localStorage.getItem(key);
  }

  public set(key: string, value: object) {
    localStorage.setItem(key, JSON.stringify(value));
  }

  public delete(key: string) {
    localStorage.removeItem(key);
  }
}

export { BaseStorage };
