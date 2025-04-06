import "../polyfills/arrayPolyfills";
import {TOUR_TYPES} from "../config/tourConfig";
import getDefaultDateRange from "./getDefaultDateRange";

type ListingParams = {
  destination: string;
  destinationId: string;
  tourType: string;
  startDate: string;
  endDate: string;
  adults: string;
  children: string;
  infants: string;
  teens: string;
};

type SingleTourParams = {
  id: string;
  redirect: () => void;
  startDate: string;
  endDate: string;
  adults: string;
  children: string;
  infants: string;
  teens: string;
  destination: string;
  tourId: string;
};

const formatPaxNumbers = (value: string, defaultValue: number) => {
  const formattedValue = Number(value);

  if (isNaN(formattedValue) || formattedValue > 9 || formattedValue < defaultValue || !Number.isInteger(formattedValue))
    return defaultValue;

  return formattedValue;
};

const validatePaxDates = (
  startDate: string,
  endDate: string,
  adults: string,
  children: string,
  infants: string,
  teens: string,
) => {
  const today = new Date();
  const formattedStartDate = new Date(startDate);
  const formattedEndDate = new Date(endDate);

  if (
    formattedStartDate.toString() == "Invalid Date" ||
    formattedEndDate.toString() == "Invalid Date" ||
    today >= formattedStartDate ||
    formattedStartDate >= formattedEndDate
  ) {
    const {startDate: defaultStartDate, endDate: defaultEndDate} = getDefaultDateRange();

    startDate = new Date(defaultStartDate).toISOString().split("T")[0];
    endDate = new Date(defaultEndDate).toISOString().split("T")[0];
  }

  const formattedAdults = formatPaxNumbers(adults, 1);
  const formattedChildren = formatPaxNumbers(children, 0);
  const formattedInfants = formatPaxNumbers(infants, 0);
  const formattedTeens = formatPaxNumbers(teens, 0);

  return {
    startDate,
    endDate,
    formattedAdults,
    formattedChildren,
    formattedInfants,
    formattedTeens,
  };
};

export const validateCategory = (tourType: string, fallbackValue?: string) => {
  if (!tourType || !TOUR_TYPES.includes(tourType as (typeof TOUR_TYPES)[number]))
    return fallbackValue || TOUR_TYPES[TOUR_TYPES.length - 1];

  return tourType;
};

export const listingUrlParamsHandler = (params: ListingParams) => {
  const {startDate, endDate, destination, destinationId, adults, children, infants, teens, ...otherParams} = params;
  let {tourType} = otherParams;

  tourType = validateCategory(tourType);

  const {
    startDate: validatedStartDate,
    endDate: validatedEndDate,
    formattedAdults,
    formattedChildren,
    formattedInfants,
    formattedTeens,
  } = validatePaxDates(startDate, endDate, adults, children, infants, teens);

  return {
    startDate: validatedStartDate,
    endDate: validatedEndDate,
    tourType,
    destinationId: destinationId.length < 8 ? "1525c1e2" : destinationId, // Fallback destination id(Tiruchirapalli id) is given,
    destination: destination.length < 3 ? "Tiruchirapalli" : destination,
    adults: formattedAdults,
    children: formattedChildren,
    infants: formattedInfants,
    teens: formattedTeens,
  };
};

export const singleTourUrlParamsHandler = (params: SingleTourParams) => {
  const {id, redirect, startDate, endDate, adults, children, infants, teens, destination, tourId} = params;
  const {
    startDate: validatedStartDate,
    endDate: validatedEndDate,
    formattedAdults,
    formattedChildren,
    formattedInfants,
    formattedTeens,
  } = validatePaxDates(startDate, endDate, adults, children, infants, teens);

  if (!id || id.length !== 8) redirect();

  return {
    tourId: tourId.length < 8 ? "b3bbd588" : tourId, // Fallback tour id(Cycling Tour of Trichy id) is given,
    destination: destination.length < 3 ? "Tiruchirapalli" : destination,
    startDate: validatedStartDate,
    endDate: validatedEndDate,
    adults: formattedAdults,
    children: formattedChildren,
    infants: formattedInfants,
    teens: formattedTeens,
  };
};
