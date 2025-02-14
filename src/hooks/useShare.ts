import {useState} from "react";

type ShareProps = {
  title: string;
  description: string;
  url: string;
};

const useShare = ({title, description, url}: ShareProps) => {
  const [isError, setError] = useState(false);
  const [isSharingSupported, setSharingSupported] = useState(
    typeof navigator !== "undefined" && !!navigator.share,
  );

  const reset = () => {
    setError(false);
  };

  const handleShare = async () => {
    if (!navigator.share) {
      setSharingSupported(false);

      return;
    }

    try {
      await navigator.share({title, text: description, url});
    } catch (err) {
      console.error("Share failed:", err);
      setError(true);
    }
  };

  return {handleShare, reset, isError, isSharingSupported};
};

export default useShare;
