import { PaxProps } from "../type";

const calculatePaxTotal = (pax: PaxProps) => {
    return Object.values(pax).reduce((val1, val2) => val1 + val2);
}

export default calculatePaxTotal