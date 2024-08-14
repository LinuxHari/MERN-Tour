import { useLayoutEffect, useState } from "react";

const useWindowSize = () => {
  const [windowSize, setWindowSize] = useState({ width: 0, height: 0 });

  const handleSize = () => {
    setWindowSize({
      width: window.innerWidth,
      height: window.innerHeight,
    });
  };

  useLayoutEffect(() => {

    let resizeTimeout: number | null = null;
    const debouncedHandleSize = () => {
      if (resizeTimeout) clearTimeout(resizeTimeout);

      resizeTimeout = setTimeout(() => {
        handleSize();
        resizeTimeout = null;
      }, 200);
    };

    window.addEventListener("resize", debouncedHandleSize);

    return () => {
      if (resizeTimeout) clearTimeout(resizeTimeout);
      console.log("re size removed");
      
      window.removeEventListener("resize", debouncedHandleSize);
    };
  }, []);

  return windowSize;
};

export default useWindowSize