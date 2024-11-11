import { z } from "zod";
import { EmailSchema } from "./authSchema";
import { LocationSchema } from "./tourSchema";

const BookingSchema = z.object({
    fullName: z.string().min(2, {message: "Full name must contain atleast 2 characters"}).max(64, {message: "Full name must not exceed 64 characters"}),
    countryCode: z.number({message: "Country code must be a number"}).min(1, {message: "Invalid country code"}).max(999, {message: "Country code is invalid"})
}).merge(EmailSchema).merge(LocationSchema.omit({city: true}))

export type BookingSchemaType = z.infer<typeof BookingSchema>

export default BookingSchema