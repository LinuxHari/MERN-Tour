import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react";
import env from "../../config/envConfig";
import {RatingType} from "../../schema/reviewSchema";
import {
  AvailabilityResponse,
  BaseSearchParams,
  BookingBody,
  BookingDetailsResponse,
  ListingCardProps,
  ReserveBody,
  ReservedTourResponse,
  ReserveResponse,
  ReviewResponse,
  SearchSuggestions,
  SingleTourParams,
  SingleTourResponse,
  TourListResponse,
  TourSearchParams,
} from "./type";

export const baseApi = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({baseUrl: `${env.API_BASE_URL}`}),
  tagTypes: ["Tour", "User", "Book", "Review", "Favorites", "Earnings", "UNAUTHORIZED"],
  endpoints: (builder) => ({
    getSearchSuggestionsByText: builder.query<SearchSuggestions, string>({
      query: (searchText) => ({url: "/tour/search", params: {searchText}}),
    }),
    getToursBySearch: builder.query<TourListResponse, TourSearchParams>({
      query: (params) => {
        const {appliedFilters, ...restParams} = params;

        return {
          url: "/tour",
          params: {...restParams, ...appliedFilters},
          credentials: "include",
        };
      },
    }),
    getTourById: builder.query<SingleTourResponse, SingleTourParams>({
      query: ({id, ...params}) => ({
        url: `/tour/${id}`,
        params,
        credentials: "include",
      }),
    }),
    reserveTour: builder.mutation<ReserveResponse, ReserveBody>({
      query: (reserveData) => ({
        url: `/tour/reserve`,
        method: "POST",
        body: reserveData,
        credentials: "include",
      }),
    }),
    getReservedTour: builder.query<ReservedTourResponse, string>({
      query: (id) => ({url: `/tour/reserve/${id}`, credentials: "include"}),
    }),
    bookTour: builder.mutation<{clientSecret: string; bookingId: string}, BookingBody>({
      query: ({id, ...bookingData}) => ({
        url: `/tour/book/${id}`,
        method: "POST",
        body: bookingData,
        credentials: "include",
      }),
    }),
    getBooking: builder.query<BookingDetailsResponse, string>({
      query: (id) => ({url: `/tour/book/${id}`, credentials: "include"}),
      providesTags: (_, __, bookingId) => [{type: "Book", id: bookingId}],
    }),
    cancelBooking: builder.mutation<void, string>({
      query: (id) => ({
        url: `/tour/book/cancel/${id}`,
        method: "POST",
        credentials: "include",
      }),
      invalidatesTags: (_, __, bookingId) => [{type: "Book", id: bookingId}],
    }),
    getReview: builder.query<ReviewResponse, string>({
      query: (id) => ({
        url: `/tour/review/${id}`,
        method: "GET",
        credentials: "include",
      }),
      providesTags: (_, __, tourId) => [{type: "Review", id: tourId}],
    }),
    review: builder.mutation<void, RatingType & {tourId: string}>({
      query: ({tourId, ...review}) => ({
        url: `/tour/review/${tourId}`,
        method: "POST",
        credentials: "include",
        body: review,
      }),
      invalidatesTags: (_, __, {tourId}) => [{type: "Review", id: tourId}],
    }),
    popularTours: builder.query<ListingCardProps[], void>({
      query: () => ({
        url: "/tour/popular",
        method: "GET",
      }),
    }),
    trendingTours: builder.query<ListingCardProps[], void>({
      query: () => ({
        url: "/tour/trending",
        method: "GET",
      }),
    }),
    getToursByCategory: builder.query<TourListResponse, BaseSearchParams>({
      query: (params) => {
        const {appliedFilters, ...restParams} = params;
        const {tourTypes, ...otherAppliedFilters} = appliedFilters;

        return {
          url: `/tour/category/${tourTypes}`,
          params: {...restParams, ...otherAppliedFilters},
          credentials: "include",
        };
      },
    }),
    getAvailability: builder.query<AvailabilityResponse, string>({
      query: (tourId: string) => ({
        url: `/tour/${tourId}/availability`,
      }),
    }),
  }),
});

export const {
  useGetTourByIdQuery,
  useGetToursBySearchQuery,
  useGetSearchSuggestionsByTextQuery,
  useReserveTourMutation,
  useGetReservedTourQuery,
  useBookTourMutation,
  useGetBookingQuery,
  useCancelBookingMutation,
  useGetReviewQuery,
  useReviewMutation,
  usePopularToursQuery,
  useTrendingToursQuery,
  useGetToursByCategoryQuery,
  useGetAvailabilityQuery,
} = baseApi;
