import {z} from "zod";
import {MAX_PAX_COUNT, MIN_PAX_COUNT, TOUR_TYPES} from "../config/tourConfig";
import calculatePaxTotal from "../utils/calculatePaxTotal";

export const searchSchema = z.object({
  destinationId: z
    .string({message: "Please select a destination"})
    .min(8, {message: "Invalid destination id"})
    .max(8, {message: "Invalid destination id"}),
  dateRange: z.object(
    {
      startDate: z.date({required_error: "Start date is required"}),
      endDate: z.date({required_error: "End date is required"}),
    },
    {message: "Dates are required"},
  ),
  tourType: z.enum(TOUR_TYPES, {message: "Invalid tour type"}),
  pax: z
    .object({
      adults: z
        .number()
        .min(1, {message: "Number of adults atleast should be one"})
        .max(10, {message: "Invalid number of adults"}),
      teens: z
        .number()
        .min(0, {message: "Number of teens atleast should be one"})
        .max(10, {message: "Invalid number of teens"}),
      children: z
        .number()
        .min(0, {message: "Number of children atleast should be one"})
        .max(10, {message: "Invalid number of children"}),
      infants: z
        .number()
        .min(0, {message: "Number of infants atleast should be one"})
        .max(10, {message: "Invalid number of infants"}),
    })
    .refine(
      (pax) => {
        const total = calculatePaxTotal(pax);

        if (total < MIN_PAX_COUNT || total > MAX_PAX_COUNT) return false;

        return true;
      },
      {message: "Invalid passengers count"},
    ),
});

export type SearchSchemaType = z.infer<typeof searchSchema>;
