import {z} from "zod";

const RatingSchema = z.object({
  ratings: z.object({
    Location: z
      .number({message: "Please give rating for Location"})
      .min(1, {message: "Invalid location rating"})
      .max(5, {message: "Invalid location rating"}),
    Amenities: z
      .number({message: "Please give rating for Amenities"})
      .min(1, {message: "Invalid amenities rating"})
      .max(5, {message: "Invalid amenities rating"}),
    Food: z
      .number({message: "Please give rating for Food"})
      .min(1, {message: "Invalid food rating"})
      .max(5, {message: "Invalid food rating"}),
    Room: z
      .number({message: "Please give rating for Room"})
      .min(1, {message: "Invalid room rating"})
      .max(5, {message: "Invalid room rating"}),
    Price: z
      .number({message: "Please give rating for Price"})
      .min(1, {message: "Invalid price rating"})
      .max(5, {message: "Invalid price rating"}),
  }),
  title: z
    .string({message: "Let us know how was the tour"})
    .min(2, {message: "Should have atleast two characters"})
    .max(100, {message: "Should not exceed more than 100 characters"}),
  comment: z
    .string({message: "Let us know how did you enjoy it"})
    .min(2, {message: "Should have atleast two characters"})
    .max(500, {message: "Should not exceed more than 500 characters"}),
});

export type RatingType = z.infer<typeof RatingSchema>;

export default RatingSchema;
