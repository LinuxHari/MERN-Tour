import { z } from "zod";
import { tourTypes } from "../config/tourConfig";

export const searchSchema = z.object({
    place: z.string().min(2, {message: "Invalid place name"}).max(85, {message: "Place name is too long"}),
    dateRange: z.object({
        startDate: z.date({required_error: "Start date is required"}),
        endDate: z.date({required_error: "End date is required"})
    }),
    tourType: z.string().refine((type) => tourTypes.includes(type), {message: "Invalid tour type"})
})

export type SearchSchemaType = z.infer<typeof searchSchema>