import { PostResponse, Tour } from "../../type";
import { baseApi } from "./BaseApi";

export const adminApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getAdminPublishedTours: builder.query<Tour, string>({
      query: () => "/admin",
      providesTags: ["Tour"],
    }),
    createTour: builder.mutation<PostResponse, Tour>({
      query: (body) => ({
        url: "/admin",
        method: "POST",
        body,
      }),
    }),
  }),
});

export const { useGetAdminPublishedToursQuery } = adminApi;
