import {MIN_AGE} from "../config/tourConfig";

const getAgeRange = () => {
  const ageCategories = Object.entries(MIN_AGE).sort((prevAge, currAge) => currAge[1] - prevAge[1]) as [
    keyof typeof MIN_AGE,
    number,
  ][];

  const ageRanges = ageCategories.map(([category, minAge], index, arr) => {
    const prevMinAge = arr[index - 1]?.[1];

    return {
      category,
      minAge,
      maxAge: prevMinAge ? prevMinAge - 1 : undefined,
    };
  });

  const getLabel = (category: string, minAge: number, maxAge?: number) =>
    `${category.charAt(0).toUpperCase() + category.slice(1)} (${minAge}${maxAge ? ` - ${maxAge}` : "+"})`;

  return {ageRanges, getLabel};
};

export default getAgeRange;
