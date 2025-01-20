import {BookedTours, FavoriteTours, UserInfoResponse} from "../../type";
import {baseApi} from "./baseApi";

const userApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getUserInfo: builder.query<UserInfoResponse, void>({
      query: () => ({url: "/user/info", credentials: "include"}),
      providesTags: (user) => (user ? [{type: "User", id: user.email}] : ["UNAUTHORIZED"]),
    }),
    addTourToFavorite: builder.mutation<void, string>({
      query: (tourId) => ({url: `/user/favorite/${tourId}`, credentials: "include"}),
    }),
    getFavoriteTours: builder.query<{tours: FavoriteTours[]; totalCount: number}, void>({
      query: () => ({url: "/user/favorite", credentials: "include"}),
    }),
    removeTourFromFavorite: builder.mutation<void, string>({
      query: (tourId) => ({url: `/user/favorite/${tourId}`, credentials: "include"}),
    }),
    getBookings: builder.query<BookedTours, void>({
      query: () => ({url: "/user/bookings", credentials: "include"}),
    }),
  }),
});

export const {
  useGetUserInfoQuery,
  useAddTourToFavoriteMutation,
  useGetFavoriteToursQuery,
  useRemoveTourFromFavoriteMutation,
  useGetBookingsQuery,
} = userApi;
