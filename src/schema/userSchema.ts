import {z} from "zod";
import removeSpaces from "../utils/removeSpaces";
import {LocationSchema} from "./tourSchema";
import {EmailSchema, LoginSchema, NameSchema} from "./authSchema";

export const BaseUserSchema = z
  .object({
    email: EmailSchema.shape.email,
    phone: z
      .number({message: "Invalid phone number"})
      .min(1111, {message: "Invalid phone number"})
      .max(99999999999, {message: "Invalid phone number"}),
    countryCode: z
      .number({message: "Invalid country code"})
      .min(0, {message: "Invalid country code"})
      .max(998, {message: "Invalid country code"}),
    // profile: z.object({
    //   file: z
    //     .custom<File>()
    //     .refine((file) => file.size <= 1 * 1024 * 1024, {
    //       message: "The profile image must be a maximum of 1MB.",
    //     })
    //     .refine((file) => file.type.startsWith("image"), {
    //       message: "Only images are allowed to be sent.",
    //     }),
    // }),
    address: z.string({message: "Invalid address"}).transform(removeSpaces).pipe(z.string().min(10).max(200)),
  })
  .merge(NameSchema); // Adding 3 merges in a row caused https://github.com/colinhacks/zod/issues/2697, so added email with shape merged and extended

export const PasswordSchema = z
  .object({
    oldPassword: LoginSchema.shape.password,
    newPassword: LoginSchema.shape.password,
    confirmPassword: LoginSchema.shape.password,
  })
  .refine(({newPassword, confirmPassword, oldPassword}) => {
    if (newPassword === confirmPassword) return {message: "Password did not match"};
    else if (newPassword === oldPassword) return {message: "Old password and new password both are same"};
  });

export const UserSchema = z.intersection(BaseUserSchema, LocationSchema);

export const getAdminSearchSchema = (minLength: number, maxLength: number) =>
  z.object({
    search: z
      .string()
      .min(minLength, `Minimum ${minLength} characters required`)
      .max(maxLength, `Maximum ${maxLength} characters required`),
  });

export type UserSchemaType = z.infer<typeof UserSchema>;
export type PasswordSchemaType = z.infer<typeof PasswordSchema>;
