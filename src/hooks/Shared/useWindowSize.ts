import {useLayoutEffect, useState} from "react";

const useWindowSize = () => {
  const [windowSize, setWindowSize] = useState({
    width: window.innerWidth,
    height: window.innerHeight,
  });

  const handleSize = () => {
    setWindowSize({
      width: window.innerWidth,
      height: window.innerHeight,
    });
  };

  useLayoutEffect(() => {
    // Prevent unnecessary re-renders with debouncing

    let resizeTimeout: ReturnType<typeof setTimeout> | null = null;
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

      window.removeEventListener("resize", debouncedHandleSize);
    };
  }, []);

  return {...windowSize, isMobile: windowSize.width < 992, isSmallScreen: windowSize.width < 1280};
};

export default useWindowSize;
