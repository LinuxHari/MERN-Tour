import { useEffect, useState } from "react";

type Value = string | number | (() => void)

const useDebounce = (value: Value, duration: number) => {
  const [debouncedValue, setDebouncedValue] = useState<Value>();

  useEffect(() => {
    const id = setTimeout(() => setDebouncedValue(value), duration);

    return () => {
      clearTimeout(id);
    };
  }, [value, duration]);
  return debouncedValue;
};

export default useDebounce;
