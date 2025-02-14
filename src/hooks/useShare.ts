import {useState} from "react";

type ShareProps = {
  title: string;
  description: string;
  url: string;
};

const useShare = ({title, description, url}: ShareProps) => {
  const [isError, setError] = useState(false);
  const [isSharingSupported, setSharingSupported] = useState(true);

  const reset = () => {
    setError(false);
    setSharingSupported(true);
  };

  const handleShare = () => {
    if (!navigator.share) return setSharingSupported(false);
    try {
      navigator.share({title, text: description, url});
    } catch (_) {
      setError(true);
    }
  };

  return {handleShare, reset, isError, isSharingSupported};
};

export default useShare;
