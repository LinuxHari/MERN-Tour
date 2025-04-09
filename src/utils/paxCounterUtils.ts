import {MIN_AGE} from "../config/tourConfig";
import {PaxProps} from "../type";
import {TourSchemaType} from "../schema/tourSchema";

export type PaxAgeCategory = keyof typeof MIN_AGE;
export type PaxType = keyof PaxProps;

type PaxCounterUtilsParams = {
  pax: PaxProps;
  price?: TourSchemaType["price"];
  minAge?: number;
};

const paxCounterUtils = ({pax, price, minAge}: PaxCounterUtilsParams) => {
  const paxAgeMap: Record<PaxType, PaxAgeCategory> = {
    adults: "adult",
    teens: "teen",
    children: "child",
    infants: "infant",
  };

  const paxEntries = Object.entries(paxAgeMap) as [PaxType, PaxAgeCategory][];

  const eligibleAgeCategories =
    minAge !== undefined
      ? (Object.entries(MIN_AGE) as [PaxAgeCategory, number][]).filter(([_, age]) => age >= minAge).map(([key]) => key)
      : null;

  const paxData = paxEntries
    .filter(([_, ageCategory]) => !eligibleAgeCategories || eligibleAgeCategories.includes(ageCategory))
    .map(([paxType, ageCategory], index, arr) => {
      const paxCount = pax[paxType] || 0;
      const paxPrice = price?.[ageCategory] ?? 0;
      const categoryMinAge = MIN_AGE[ageCategory];
      const maxAge = index > 0 ? MIN_AGE[arr[index - 1][1]] - 1 : ("+" as const);

      return {
        paxType,
        paxCount,
        paxPrice,
        minAge: categoryMinAge,
        maxAge,
        disableDecrement: paxType === "adults" && paxCount <= 1,
      };
    });

  return paxData;
};

export default paxCounterUtils;
