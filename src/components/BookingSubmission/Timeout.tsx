import {useLayoutEffect, useState} from "react";
import MiniSkeleton from "../Skeletons/MiniSkeleton";

type TimeoutProps = {
  expiresAt: number;
  onTimeout: () => void;
};

const Timeout = ({expiresAt, onTimeout}: TimeoutProps) => {
  const [count, setCount] = useState(0);
  const [isLoading, setLoading] = useState(true); // Adding it to show skeleton to prevent time's up glitch

  useLayoutEffect(() => {
    const id = setInterval(() => {
      const count = Math.max(0, Math.floor((expiresAt - Date.now()) / 1000));
      const remainingTime = Math.max(0, count - 1);

      setCount(remainingTime);
      if (remainingTime <= 0) {
        onTimeout();
        clearInterval(id);
      }

      if (isLoading) setLoading(false);
    }, 1000);

    return () => clearInterval(id);
  }, [expiresAt, count]);

  const minutes = Math.floor(count / 60);
  const seconds = count % 60;

  if (isLoading) return <MiniSkeleton />;

  return (
    <div className="my-2 px-0 text-danger fw-500">
      {count > 0 ? (
        <>
          <span className="fw-500 fs-5">
            <i className="icon-clock mx-2" />
            {minutes}:{seconds < 10 ? `0${seconds}` : seconds}
          </span>
          <span className="mx-2">Minutes remaining</span>
        </>
      ) : (
        <div>Time&apos;s up</div>
      )}
    </div>
  );
};

export default Timeout;
