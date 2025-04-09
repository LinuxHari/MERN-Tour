import {z} from "zod";
import {MAX_PAX_COUNT, MIN_AGE, MIN_PAX_COUNT, TOUR_TYPES} from "../config/tourConfig";
import calculatePaxTotal from "../utils/calculatePaxTotal";

export const searchSchema = z
  .object({
    name: z
      .string({message: "Please select a destination"})
      .min(2, {message: "Invalid destination"})
      .max(85, {message: "Invalid destination"}),

    id: z.string({message: "Please select a destination"}).length(8, {message: "Invalid destination id"}),

    dateRange: z.object(
      {
        startDate: z.date({required_error: "Start date is required"}),
        endDate: z.date({required_error: "End date is required"}),
      },
      {message: "Dates are required"},
    ),

    tour: z
      .string({message: "Please select a tour or destination"})
      .min(2, {message: "Invalid tour"})
      .max(85, {message: "Invalid tour"})
      .or(z.literal("")),

    minAge: z.number().optional(),

    tourType: z.enum(TOUR_TYPES, {message: "Invalid tour type"}).optional().or(z.literal("")),

    pax: z.object(
      {
        adults: z.number().min(1).max(10),
        teens: z.number().min(0).max(10),
        children: z.number().min(0).max(10),
        infants: z.number().min(0).max(10),
      },
      {message: "Invalid number of passengers"},
    ),
  })
  .transform((data) => {
    const {minAge, pax} = data;

    if (!minAge) return data;

    const filteredPax = {
      adults: minAge <= MIN_AGE.adult ? pax.adults : 0,
      teens: minAge <= MIN_AGE.teen ? pax.teens : 0,
      children: minAge <= MIN_AGE.child ? pax.children : 0,
      infants: minAge <= MIN_AGE.infant ? pax.infants : 0,
    };

    return {
      ...data,
      pax: filteredPax,
    };
  })
  .refine(
    ({pax}) => {
      const total = calculatePaxTotal(pax);

      return total >= MIN_PAX_COUNT && total <= MAX_PAX_COUNT;
    },
    {
      message: "Invalid passengers count",
      path: ["pax"],
    },
  )
  .refine(
    ({tourType, tour}) => {
      if (!tour && !tourType) return false;

      return true;
    },
    {message: "Invalid tour type"},
  );

export type SearchSchemaType = z.infer<typeof searchSchema>;
