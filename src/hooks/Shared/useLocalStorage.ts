import {useEffect, useState} from "react";

const useLocalStorage = (key: string, initialValue: object | number | string | null = null) => {
  const [value, setValue] = useState<object | number | string | null>(initialValue);

  const setLocalValue = (value: string | number | object) => {
    localStorage.setItem(key, typeof value === "object" ? JSON.stringify(value) : String(value));
    setValue(value);
  };

  const getValue = () => {
    const storedValue = localStorage.getItem(key);

    if (storedValue) {
      try {
        setValue(JSON.parse(storedValue));
      } catch {
        if (!Number.isNaN(Number(storedValue))) setValue(Number(storedValue));
        else setValue(storedValue);
      }
    } else {
      if (initialValue) setLocalValue(initialValue);
    }
  };

  useEffect(() => {
    getValue();
  }, [key]);

  return [value, setLocalValue] as const;
};

export default useLocalStorage;
