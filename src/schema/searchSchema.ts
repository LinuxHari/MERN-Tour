import { z } from "zod";
import { destinationTypes, tourTypes } from "../config/tourConfig";

export const searchSchema = z.object({
  place: z.object(
    {
      name: z.string().min(2, { message: "Invalid place name" }).max(85, { message: "Place name is too long" }),
      type: z.enum(destinationTypes as [string, ...string[]], { message: "Invalid destination type" }),
    },
    { required_error: "Destination required" }
  ),
  dateRange: z.object(
    {
      startDate: z.date({ required_error: "Start date is required" }),
      endDate: z.date({ required_error: "End date is required" }),
    },
    { message: "Dates are required" }
  ),
  tourType: z.enum(tourTypes as [string, ...string[]], { message: "Invalid tour type" }),
});

export type SearchSchemaType = z.infer<typeof searchSchema>;
