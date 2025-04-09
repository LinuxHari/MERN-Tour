import {MIN_AGE} from "../config/tourConfig";
import {SearchSchemaType} from "../schema/searchSchema";
import {PaxProps} from "../type";

const getAgeFilteredPax = (minAge: number, pax: PaxProps): SearchSchemaType["pax"] => {
  const ageFilters: Record<number, (keyof SearchSchemaType["pax"])[]> = {
    [MIN_AGE.child]: ["infants"],
    [MIN_AGE.teen]: ["infants", "children"],
    [MIN_AGE.adult]: ["infants", "children", "teens"],
  };

  const fieldsToRemove = ageFilters[minAge] || [];

  const filteredPax = Object.fromEntries(
    Object.entries(pax).map(([key, value]) => {
      if (fieldsToRemove.includes(key as keyof SearchSchemaType["pax"])) {
        return [key, 0];
      }

      return [key, value];
    }),
  ) as SearchSchemaType["pax"];

  return filteredPax;
};

export default getAgeFilteredPax;
