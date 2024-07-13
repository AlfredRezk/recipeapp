import { useState } from "react";

const getValue = (key, initialValue) => {
  const item = localStorage.getItem(key);
  return item ? JSON.parse(item) : initialValue;
};

const useLocalStorage = (key, initialValue) => {
  const [localStorageValue, setLocalStroageValue] = useState(() =>
    getValue(key, initialValue)
  );

  const setValue = (value) => {
    setLocalStroageValue(value);
    localStorage.setItem(key, JSON.stringify(value));
  };
  return [localStorageValue, setValue];
};

export default useLocalStorage;
