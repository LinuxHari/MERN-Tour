import { Tour } from "../../type";
import { baseApi } from "./TourApi";

export const adminApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getAdminPublishedTours: builder.query<Tour, string>({
      query: () => "/admin",
      providesTags: ["Tour"],
    }),
    createTour: builder.mutation<void, Tour>({
      query: (body) => ({
        url: "/admin",
        method: "POST",
        body,
      }),
    }),
  }),
});

export const { useGetAdminPublishedToursQuery } = adminApi;
