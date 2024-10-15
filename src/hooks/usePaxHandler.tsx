import { useState } from "react";
import { PaxProps } from "../type";
import calculatePaxTotal from "../utils/calculatePaxTotal";
import { maxPaxCount, minPaxCount } from "../config/tourConfig";

const usePaxHandler = (pax: PaxProps) => {
  const [currentPax, setPax] = useState(pax);

  const handlePax = (type: string, value: number) => {
    const updatedPax = { ...currentPax, [type]: value }
    const total = calculatePaxTotal(updatedPax);
    if (total <= maxPaxCount && total >= minPaxCount && value >= 0) setPax(updatedPax);
  };

  return { currentPax, setPax: handlePax, total: calculatePaxTotal(currentPax) };
};

export default usePaxHandler;