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

export const baseApi = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({ baseUrl: `${env.API_BASE_URL}` }),
  tagTypes: ["Tour"],
  endpoints: (builder) => ({
    getToursBySearch: builder.query<Partial<Tour>[], Omit<TourSearchParams, "id">>({
      query: (params) => "/tour?" + generateQueryParams(params),
    }),
    getTourById: builder.query<Tour, TourSearchParams>({
      query: ({ id, ...params }) => `/tour/${id}?` + generateQueryParams(params),
    }),
  }),
});

export const { useGetTourByIdQuery, useGetToursBySearchQuery } = baseApi;
