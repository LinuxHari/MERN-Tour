import {PasswordSchemaType, UserSchemaType} from "../../schema/userSchema";
import {baseApi} from "./baseApi";
import {BookingsResponse, FavoriteToursResponse, UserInfoResponse} from "./type";

const userApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getUserInfo: builder.query<UserInfoResponse, void>({
      query: () => ({url: "/user", credentials: "include"}),
      providesTags: (user) => (user ? [{type: "User", id: user.email}] : ["UNAUTHORIZED"]),
    }),
    updateUserInfo: builder.mutation<void, UserSchemaType>({
      query: (userInfo) => ({
        url: `/user`,
        method: "PUT",
        credentials: "include",
        body: userInfo,
      }),
      invalidatesTags: ["User"],
    }),
    updatePassword: builder.mutation<void, PasswordSchemaType>({
      query: (passwordData) => ({
        url: "/user/password",
        method: "PUT",
        body: passwordData,
        credentials: "include",
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
    getBookings: builder.query<BookingsResponse, {status: string; page: number}>({
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
  useUpdatePasswordMutation,
} = userApi;
