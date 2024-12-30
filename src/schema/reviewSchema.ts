import { z } from "zod";

const RatingSchema = z.object({
    ratings: z.object({
      Location: z.number().min(1, {message: "Invalid location rating"}).max(5, {message: "Invalid location rating"}),
      Amenities: z.number().min(1, {message: "Invalid amenities rating"}).max(5, {message: "Invalid amenities rating"}),
      Food: z.number().min(1, {message: "Invalid food rating"}).max(5, {message: "Invalid food rating"}),
      Room: z.number().min(1, {message: "Invalid room rating"}).max(5, {message: "Invalid room rating"}),
      Price: z.number().min(1, {message: "Invalid price rating"}).max(5, {message: "Invalid price rating"}),
    }),
    title: z.string().min(2, {message: "Title should have atleast two characters"}).max(100, {message: "Title should not exceed more than 100 characters"}),
    comment: z.string().min(2, {message: "Comment should have atleast two characters"}).max(500, {message: "Comment should not exceed more than 500 characters"})
  });

export type RatingType = z.infer<typeof RatingSchema>

export default RatingSchema