import {useEffect, useState} from "react";

const useLocalStorage = <T>(key: string, initialValue: T | null = null) => {
  const [value, setValue] = useState<T | null>(initialValue);

  const setLocalValue = (val: T) => {
    localStorage.setItem(key, typeof val === "object" ? JSON.stringify(val) : String(val));
    setValue(val);
  };

  const getValue = () => {
    const storedValue = localStorage.getItem(key);

    if (storedValue) {
      try {
        setValue(JSON.parse(storedValue) as T);
      } catch {
        if (!Number.isNaN(Number(storedValue))) setValue(Number(storedValue) as T);
        else setValue(storedValue as T);
      }
    } else {
      if (initialValue !== null) setLocalValue(initialValue);
    }
  };

  useEffect(() => {
    getValue();
  }, [key]);

  return [value, setLocalValue] as const;
};

export default useLocalStorage;
