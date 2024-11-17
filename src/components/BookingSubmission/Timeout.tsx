import { useEffect, useState } from "react";

type TimeoutProps = {
  expiresAt: number;
};

const Timeout = ({ expiresAt }: TimeoutProps) => {
  const [count, setCount] = useState(Math.max(0, Math.floor((expiresAt - Date.now()) / 1000)));

  useEffect(() => {
    const id = setInterval(() => {
      const remainingTime = Math.max(0, count - 1);
      if (remainingTime === 0) clearInterval(id);
      else setCount(remainingTime);
    }, 1000);

    return () => clearInterval(id);
  }, [expiresAt, count]);

  const minutes = Math.floor(count / 60);
  const seconds = count % 60;

  return (
    <div className="col-8 my-2 px-0">
      {count > 0 ? (
        <div className="bg-white px-4 fw-500 py-2 rounded-12">
          Booking has to be done within {minutes}:{seconds < 10 ? `0${seconds}` : seconds} Minutes
        </div>
      ) : (
        <div>Time's up!</div>
      )}
    </div>
  );
};

export default Timeout;
