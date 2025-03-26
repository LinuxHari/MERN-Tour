import {useState} from "react";

const useClipboard = () => {
  const [isCopied, setIsCopied] = useState(false);
  const [isError, setError] = useState(false);

  const handleCopy = async (url: string) => {
    try {
      setError(false);
      await navigator.clipboard.writeText(url);
      setIsCopied(true);
      setTimeout(() => setIsCopied(false), 2000);
    } catch (err) {
      setError(true);
    }
  };

  return {handleCopy, isCopied, isError};
};

export default useClipboard;
