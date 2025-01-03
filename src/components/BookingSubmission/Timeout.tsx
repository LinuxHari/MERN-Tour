import {useEffect, useState} from "react";

type TimeoutProps = {
  expiresAt: number;
  onTimeout: () => void;
};

const Timeout = ({expiresAt, onTimeout}: TimeoutProps) => {
  const [count, setCount] = useState(Math.max(0, Math.floor((expiresAt - Date.now()) / 1000)));

  useEffect(() => {
    const id = setInterval(() => {
      const remainingTime = Math.max(0, count - 1);

      if (remainingTime <= -1) {
        onTimeout();
        clearInterval(id);
      } else setCount(remainingTime);
    }, 1000);

    return () => clearInterval(id);
  }, [expiresAt, count]);

  const minutes = Math.floor(count / 60);
  const seconds = count % 60;

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
