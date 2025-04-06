import {PasswordSchemaType, UserSchemaType} from "../../schema/userSchema";
import {baseApi} from "./baseApi";
import {BookingsBody, BookingsResponse, FavoriteToursResponse, UpdatePasswordBody, UserInfoResponse} from "./type";

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
    getBookings: builder.query<BookingsResponse, BookingsBody>({
      query: ({status, page, bookingId}) => ({
        url: "/user/bookings",
        params: bookingId ? {status, page, bookingId} : {status, page},
        credentials: "include",
      }),
    }),
    verifyEmail: builder.mutation<void, string>({
      query: (authToken) => ({
        url: "/user/verify-email",
        method: "POST",
        body: {
          authToken,
        },
      }),
    }),
    sendVerficationEmail: builder.mutation<void, string>({
      query: (email) => ({
        url: "/user/send-verification-email",
        method: "POST",
        body: {
          email,
        },
      }),
    }),
    sendResetPassMail: builder.mutation<void, string>({
      query: (email) => ({
        url: "/user/reset-mail",
        method: "POST",
        body: {
          email,
        },
      }),
    }),
    verifyResetToken: builder.mutation<void, string>({
      query: (authToken) => ({
        url: "/user/verify-reset-token",
        method: "POST",
        body: {
          authToken,
        },
      }),
    }),
    updateResetPassword: builder.mutation<void, UpdatePasswordBody>({
      query: (body) => ({
        url: "/user/update-password",
        method: "PATCH",
        body,
      }),
    }),
    getUserStatistics: builder.query<string, void>({
      query: () => ({url: "/user/statistics", credentials: "include"}),
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
  useSendVerficationEmailMutation,
  useVerifyEmailMutation,
  useSendResetPassMailMutation,
  useVerifyResetTokenMutation,
  useUpdateResetPasswordMutation,
} = userApi;
