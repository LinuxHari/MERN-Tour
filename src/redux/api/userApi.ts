import {UserSchemaType} from "../../schema/userSchema";
import {Bookings, FavoriteTours, UserInfoResponse} from "../../type";
import {baseApi} from "./baseApi";

type FavoriteToursResponse = {
  favoriteTours: FavoriteTours[];
  totalCount: number;
  totalPages: number;
};

type BookingsResponse = {
  bookings: Bookings[];
  totalPages: number;
};

const userApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getUserInfo: builder.query<UserInfoResponse, void>({
      query: () => ({url: "/user", credentials: "include"}),
      providesTags: (user) =>
        user ? [{type: "User", id: user.email}] : ["UNAUTHORIZED"],
    }),
    updateUserInfo: builder.mutation<void, UserSchemaType>({
      query: (userInfo) => ({
        url: `/user`,
        method: "PUT",
        credentials: "include",
        body: userInfo,
      }),
    }),
    addTourToFavorite: builder.mutation<void, string>({
      query: (tourId) => ({
        url: `/user/favorite/${tourId}`,
        method: "POST",
        credentials: "include",
      }),
      invalidatesTags: ["Favorites"],
    }),
    getFavoriteTours: builder.query<FavoriteToursResponse, number>({
      query: (page) => ({
        url: "/user/favorite",
        params: {page},
        credentials: "include",
      }),
      providesTags: ["Favorites"],
    }),
    removeTourFromFavorite: builder.mutation<void, string>({
      query: (tourId) => ({
        url: `/user/favorite/${tourId}`,
        method: "DELETE",
        credentials: "include",
      }),
      invalidatesTags: ["Favorites"],
    }),
    getBookings: builder.query<
      BookingsResponse,
      {status: string; page: number}
    >({
      query: ({status, page}) => ({
        url: "/user/bookings",
        params: {status, page},
        credentials: "include",
      }),
    }),
  }),
});

export const {
  useGetUserInfoQuery,
  useUpdateUserInfoMutation,
  useAddTourToFavoriteMutation,
  useGetFavoriteToursQuery,
  useRemoveTourFromFavoriteMutation,
  useGetBookingsQuery,
} = userApi;
