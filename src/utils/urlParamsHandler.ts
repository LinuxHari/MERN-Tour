import "../polyfills/arrayPolyfills"

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
}

const formatPaxNumbers = (value: string, defaultValue: number) => {
    const formattedValue = Number(value)
    console.log(formattedValue, formattedValue >= defaultValue)
    if(isNaN(formattedValue) || (formattedValue > 9 || formattedValue < defaultValue) || !Number.isInteger(formattedValue))
        return defaultValue
    return formattedValue
}


export const listingUrlParamsHandler = (params:ListingParams) => {
    let {startDate, endDate, tourType, destination, destinationType, adults, children, infants} = params

    if(!tourType || !tourTypes.includes(tourType)) tourType = tourTypes.lastItem()

    if(!destination || destination.length < 2 || !destinationType || !destinationTypes.includes(destinationType)) {
        destination = defaultTourLocation.destination
        destinationType = defaultTourLocation.destinationType
    }

    const today = new Date()
    const formattedStartDate = new Date(startDate)
    const formattedEndDate = new Date(endDate)
    if(formattedStartDate.toString() == "Invalid Date" || formattedEndDate.toString() == "Invalid Date" ||  today >= formattedStartDate || formattedStartDate >= formattedEndDate ){
        const {startDate: defaultStartDate, endDate: defaultEndDate} = getDefaultDateRange()
        startDate = new Date(defaultStartDate).toISOString().split("T")[0]
        endDate = new Date(defaultEndDate).toISOString().split("T")[0]
    }

    const formattedAdults = formatPaxNumbers(adults, 1)
    const formattedChildren = formatPaxNumbers(children, 0)
    const formattedInfants = formatPaxNumbers(infants, 0)
    
    return {startDate, endDate, tourType, destination, destinationType, adults: formattedAdults, children: formattedChildren, infants: formattedInfants}
}