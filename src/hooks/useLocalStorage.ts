import { useState } from "react";

export interface IUseLocalStorageProps {
  key: string;
  initialValue: string | string[];
}

export interface IUseLocalStorage {
  storedValue: string | string[];
  setValue: (value: string | string[]) => void;
}

const useLocalStorage = ({
  key,
  initialValue,
}: IUseLocalStorageProps): IUseLocalStorage => {
  const [storedValue, setStoredValue] = useState(() => {
    try {
      const item = window.localStorage.getItem(key);
      return item ? JSON.parse(item) : initialValue;
    } catch (error) {
      return initialValue;
    }
  });

  const setValue = (value: string | string[]) => {
    try {
      setStoredValue(value);
      window.localStorage.setItem(key, JSON.stringify(value));
    } catch (error) {
      console.error(error);
    }
  };

  return { storedValue, setValue };
};

export default useLocalStorage;
