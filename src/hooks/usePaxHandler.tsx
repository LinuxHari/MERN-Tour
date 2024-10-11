import { useState } from "react";
import { PaxProps } from "../type";

const usePaxHandler = (pax: PaxProps) => {
  const [currentPax, setPax] = useState(pax);
  const maxCount = 10;
  const minCount = 1

  const handlePax = (type: string, value: number) => {
    const updatedPax = { ...currentPax, [type]: value }
    const total = Object.values(updatedPax).reduce((val1, val2) => val1 + val2);
    if (total <= maxCount && total >= minCount && value >= 0) setPax(updatedPax);
  };

  return { currentPax, setPax: handlePax };
};

export default usePaxHandler;