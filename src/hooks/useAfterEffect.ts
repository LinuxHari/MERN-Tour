import { useEffect, useRef } from "react";

type EffectCallback = () => void;
type DependencyList = ReadonlyArray<any>;

const useAfterEffect = (fn: EffectCallback, dependencies: DependencyList) => {
  const isMountingRef = useRef(false);

  useEffect(() => {
    isMountingRef.current = true;
  }, []);

  useEffect(() => {
    if (!isMountingRef.current) {
      return fn();
    } else {
      isMountingRef.current = false;
    }
  }, dependencies);
};

export default useAfterEffect;
