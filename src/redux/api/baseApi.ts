import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import env from "../../config/envConfig";
import { AppliedFiltersProps, ReserveBody, ReserveResponse, SearchSuggestions, SingleTourResponse, TourListResponse } from "../../type";

type TourSearchParams = {
  destinationId: string;
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

type ReservedTourResponse = Omit<ReserveBody, "tourId" | "pax"> & {
  expiresAt: number;
  passengers: ReserveBody["pax"];
  tourDetails: {
    duration: number;
    price: SingleTourResponse["price"],
    images: string[];
    name: string;
    minAge: string;
  };
}

export const baseApi = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({ baseUrl: `${env.API_BASE_URL}` }),
  tagTypes: ["Tour", "User", "UNAUTHORIZED"],
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
    reserveTour: builder.mutation<ReserveResponse, ReserveBody>({
      query: (reserveData) => ({url: `/tour/reserve`, method: "POST", body: reserveData, credentials: "include"}),
  }),
    getReservedTour: builder.query<ReservedTourResponse, string>({
      query: (id) => ({url: `/tour/reserve/${id}`, credentials: "include"})
    })
  }),
});

export const { useGetTourByIdQuery, useGetToursBySearchQuery, useGetSearchSuggestionsByTextQuery, useReserveTourMutation, useGetReservedTourQuery } = baseApi;
