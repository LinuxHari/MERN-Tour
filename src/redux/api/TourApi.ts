import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import env from "../../config/envConfig";
import { Tour } from "../../type";
import { generateQueryParams } from "../../utils/generateQueryParams";

type TourSearchParams = {
  id: string;
  city: string;
  state: string;
  country: string;
  startDate: string;
  endDate: string;
  page: number;
};

export const tourApi = createApi({
  reducerPath: "tour",
  baseQuery: fetchBaseQuery({ baseUrl: `${env.API_BASE_URL}/tour` }),
  endpoints: (builder) => ({
    getToursBySearch: builder.query<Partial<Tour>[], Omit<TourSearchParams, "id">>({
      query: (params): string => generateQueryParams(params),
    }),
    getTourById: builder.query<Partial<Tour>[], TourSearchParams>({
      query: ({ id, ...params }): string => `/${id}` + generateQueryParams(params),
    }),
  }),
});

export const { useGetTourByIdQuery, useGetToursBySearchQuery } = tourApi;
