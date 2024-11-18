import { z } from "zod";
import removeSpaces from "../utils/removeSpaces";
import { LocationSchema } from "./tourSchema";
import { EmailSchema, NameSchema } from "./authSchema";

export const BaseUserSchema = z.object({
    email: EmailSchema.shape.email,
    phone: z.number().min(1111).max(99999999999),
    countryCode: z.number().min(0).max(998),
    profile:  
      z.object({
        file: z
          .custom<File>()
          .refine((file) => file.size <= 1 * 1024 * 1024, {
            message: "The profile image must be a maximum of 1MB.",
          })
          .refine((file) => file.type.startsWith("image"), {
            message: "Only images are allowed to be sent.",
          }),
      }),
    address: z.string({message: "Invalid address"}).transform(removeSpaces).pipe(z.string().min(10).max(200))
  }).merge(NameSchema) // Adding 3 merges in a row caused https://github.com/colinhacks/zod/issues/2697, so added email with shape merged and extended

  const UserSchema = z.intersection(BaseUserSchema, LocationSchema)

  export type UserSchemaType = z.infer<typeof UserSchema>