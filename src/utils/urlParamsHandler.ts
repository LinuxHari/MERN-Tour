import "../polyfills/arrayPolyfills";

import { tourTypes, defaultTourLocation, destinationTypes } from "../config/tourConfig";
import { getDefaultDateRange } from "./getDefaultDateRange";

type ListingParams = {
  destination: string;
  destinationType: string;
  tourType: string;
  startDate: string;
  endDate: string;
  adults: string;
  children: string;
  infants: string;
};

type SingleTourParams = {
  id?: string;
  redirect: () => void;
  startDate: string;
  endDate: string;
  adults: string;
  children: string;
  infants: string;
};

const formatPaxNumbers = (value: string, defaultValue: number) => {
  const formattedValue = Number(value);
  if (isNaN(formattedValue) || formattedValue > 9 || formattedValue < defaultValue || !Number.isInteger(formattedValue))
    return defaultValue;
  return formattedValue;
};

const validatePaxDates = (startDate: string, endDate: string, adults: string, children: string, infants: string) => {
  const today = new Date();
  const formattedStartDate = new Date(startDate);
  const formattedEndDate = new Date(endDate);
  if (
    formattedStartDate.toString() == "Invalid Date" ||
    formattedEndDate.toString() == "Invalid Date" ||
    today >= formattedStartDate ||
    formattedStartDate >= formattedEndDate
  ) {
    const { startDate: defaultStartDate, endDate: defaultEndDate } = getDefaultDateRange();
    startDate = new Date(defaultStartDate).toISOString().split("T")[0];
    endDate = new Date(defaultEndDate).toISOString().split("T")[0];
  }

  const formattedAdults = formatPaxNumbers(adults, 1);
  const formattedChildren = formatPaxNumbers(children, 0);
  const formattedInfants = formatPaxNumbers(infants, 0);

  return { startDate, endDate, formattedAdults, formattedChildren, formattedInfants };
};

export const listingUrlParamsHandler = (params: ListingParams) => {
  let { startDate, endDate, tourType, destination, destinationType, adults, children, infants } = params;

  if (!tourType || !tourTypes.includes(tourType)) tourType = tourTypes.lastItem();

  if (!destination || destination.length < 2 || !destinationType || !destinationTypes.includes(destinationType)) {
    destination = defaultTourLocation.destination;
    destinationType = defaultTourLocation.destinationType;
  }

  const {
    startDate: validatedStartDate,
    endDate: validatedEndDate,
    formattedAdults,
    formattedChildren,
    formattedInfants,
  } = validatePaxDates(startDate, endDate, adults, children, infants);

  return {
    startDate: validatedStartDate,
    endDate: validatedEndDate,
    tourType,
    destination,
    destinationType,
    adults: formattedAdults,
    children: formattedChildren,
    infants: formattedInfants,
  };
};

export const singleTourUrlParamsHandler = (params: SingleTourParams) => {
  let { id, redirect, startDate, endDate, adults, children, infants } = params;
  const {
    startDate: validatedStartDate,
    endDate: validatedEndDate,
    formattedAdults,
    formattedChildren,
    formattedInfants,
  } = validatePaxDates(startDate, endDate, adults, children, infants);

  if(!id || id.length !==8)
    redirect()

  return {
    startDate: validatedStartDate,
    endDate: validatedEndDate,
    adults: formattedAdults,
    children: formattedChildren,
    infants: formattedInfants,
  };
};
