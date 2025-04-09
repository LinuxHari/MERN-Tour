import {useState} from "react";
import {PaxProps} from "../../type";
import calculatePaxTotal from "../../utils/calculatePaxTotal";
import {MAX_PAX_COUNT, MIN_PAX_COUNT} from "../../config/tourConfig";

const usePaxHandler = (pax: PaxProps) => {
  const [currentPax, setPax] = useState<PaxProps>(pax);

  const handlePax = (type: string, value: number) => {
    const updatedPax = {...currentPax, [type]: value};
    const total = calculatePaxTotal(updatedPax);

    if (total <= MAX_PAX_COUNT && total >= MIN_PAX_COUNT && value >= 0) setPax(updatedPax);
  };

  const handleFullPax = (pax: PaxProps) => setPax(pax);

  return {currentPax, setPax: handlePax, setFullPax: handleFullPax, total: calculatePaxTotal(currentPax)};
};

export default usePaxHandler;
