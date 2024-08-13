import { useEffect, useState } from "react";

const useDebounce = (value: string | number , duration: number) => {
  const [debouncedValue, setDebouncedValue] = useState(value);

  useEffect(() => {
    const id = setTimeout(() => setDebouncedValue(value), duration);

    return () => clearTimeout(id);
  }, [value, duration]);
  return debouncedValue;
};

export default useDebounce;
