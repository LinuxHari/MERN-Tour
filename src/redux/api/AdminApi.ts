
import { PostResponse, Tour } from "../../type";
import { baseApi } from "./BaseApi";

export const adminApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getAdminPublishedTours: builder.query<Tour, string>({
      query: () => "/admin",
      providesTags: (result, error, id) => [{ type: 'Tour', id }],
      transformResponse: (response: { data: Tour}) => response.data,
      transformErrorResponse: (
        response
      ) => {
        const errorData = response.data as { message?: string };
        return errorData.message || "Something went wrong";
      },
    }),
    createTour: builder.mutation<PostResponse, Tour>({
      query: (body) => ({
        url: "/admin/add-tour",
        method: "POST",
        body,
      }),
    }),
  }),
});

export const { useGetAdminPublishedToursQuery, useCreateTourMutation } = adminApi;
