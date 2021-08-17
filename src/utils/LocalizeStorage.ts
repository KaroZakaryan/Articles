export enum LocalStorageKeys {
  ARTICLES = '@articles',
}

interface IAsyncStorage {
  Articles: (value?: any[]) => any[];
}

const localStorageValueSetter = (key: string) => (value: any) => {
  try {
    const serializedState = JSON.stringify(value);

    localStorage.setItem(key, serializedState);

    return value;
  } catch (e) {
    return null;
  }
};

const localStorageValueGetter = (key: string) => () => {
  try {
    const serializedState = localStorage.getItem(key);

    if (serializedState === null) {
      return null;
    }

    return JSON.parse(serializedState);
  } catch (err) {
    return null;
  }
};

const SET: IAsyncStorage = {
  Articles: localStorageValueSetter(LocalStorageKeys.ARTICLES),
};

const GET: IAsyncStorage = {
  Articles: localStorageValueGetter(LocalStorageKeys.ARTICLES),
};

export default {
  SET,
  GET,
};
