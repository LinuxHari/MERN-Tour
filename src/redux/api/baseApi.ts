import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import env from "../../config/envConfig";
import { AppliedFiltersProps, SearchSuggestions, SingleTourResponse, Tour, TourListResponse } from "../../type";

type TourSearchParams = {
  destination: string;
  destinationType: string;
  startDate: string;
  endDate: string;
  adults: number;
  children: number;
  infants: number;
  teens: number;
  page: number;
  filters: number;
  appliedFilters: AppliedFiltersProps & {sortType: string, minPrice?: number, maxPrice?: number};
};

type SingleTourParams = {
  id: string;
  startDate: string;
  endDate: string;
  adults: number;
  children: number;
  infants: number;
  teens: number;
}

export const baseApi = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({ baseUrl: `${env.API_BASE_URL}` }),
  tagTypes: ["Tour"],
  endpoints: (builder) => ({
    getSearchSuggestionsByText: builder.query<SearchSuggestions, string>({
      query: (searchText) => ({ url: "/tour/search", params: { searchText } }),
    }),
    getToursBySearch: builder.query<TourListResponse, TourSearchParams>({
      query: (params) => {
        const { appliedFilters, ...restParams } = params;
        return {
          url: "/tour",
          params: { ...restParams, ...appliedFilters }
        };
      },
    }),
    getTourById: builder.query<SingleTourResponse, SingleTourParams>({
      query: ({ id, ...params }) => ({ url: `/tour/${id}`, params }),
    }),
  }),
});

export const { useGetTourByIdQuery, useGetToursBySearchQuery, useGetSearchSuggestionsByTextQuery } = baseApi;
