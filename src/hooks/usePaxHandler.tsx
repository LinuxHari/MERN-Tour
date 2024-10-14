import { useState } from "react";
import { PaxProps } from "../type";

const usePaxHandler = (pax: PaxProps) => {
  const [currentPax, setPax] = useState(pax);
  const maxCount = 10;
  const minCount = 1

  const calculateTotal = (pax: PaxProps) => {
    return Object.values(pax).reduce((val1, val2) => val1 + val2);
  }

  const handlePax = (type: string, value: number) => {
    const updatedPax = { ...currentPax, [type]: value }
    const total = calculateTotal(updatedPax);
    if (total <= maxCount && total >= minCount && value >= 0) setPax(updatedPax);
  };

  return { currentPax, setPax: handlePax, total: calculateTotal(currentPax) };
};

export default usePaxHandler;