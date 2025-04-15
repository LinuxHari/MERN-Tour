import {FetchBaseQueryError} from "@reduxjs/toolkit/query";
import {ImgPath} from "../../type";
import {EditTourSchemaType, TourSchemaType} from "../../schema/tourSchema";
import getFirebaseUpload from "../../utils/getFirebaseUpload";
import {extractFirebaseImgPath} from "../../utils/extractFirebaseImgPath";
import {baseApi} from "./baseApi";
import {
  BookingsBody,
  EarningsResponse,
  PublishedToursBody,
  PublishedToursResponse,
  TotalBookingsResponse,
  TourMutationResponse,
  UsersBody,
  UsersResponse,
} from "./type";

export const adminApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getAdminPublishedTours: builder.query<PublishedToursResponse, PublishedToursBody>({
      query: ({page, tourName}) => ({
        url: "/admin/tours",
        params: tourName ? {page, tourName} : {page},
        credentials: "include",
      }),
      providesTags: (result) =>
        result
          ? [
              ...result.tours.map(({tourId}) => ({type: "Tour" as const, id: tourId})),
              {type: "Tour" as const, id: "LIST"},
            ]
          : [{type: "Tour" as const, id: "LIST"}],
    }),
    createTour: builder.mutation<TourMutationResponse, TourSchemaType>({
      queryFn: async (formData, _, __, baseQuery) => {
        const {uploadImages, deleteImages} = getFirebaseUpload();

        try {
          const imageUrls = await uploadImages(formData.images, formData.name);
          const highlights = formData.highlights.map((highlight) => highlight.value);
          const tourData = {...formData, images: imageUrls, highlights};
          const response = await baseQuery({
            url: "/admin/tour",
            method: "POST",
            body: tourData,
            credentials: "include",
          });

          if (response.error) {
            const imagesToDelete = extractFirebaseImgPath(imageUrls, ImgPath.tours);

            await deleteImages(imagesToDelete);
            throw new Error("Failed to add tour");
          }

          return {data: {error: false}};
        } catch (error) {
          if (error instanceof Error) {
            return {error: {error: error.message} as FetchBaseQueryError};
          }

          return {error: {error: "Network Error"} as FetchBaseQueryError};
        }
      },
      invalidatesTags: [{type: "Tour", id: "LIST"}],
    }),
    updateTour: builder.mutation<TourMutationResponse, EditTourSchemaType & {tourId: string}>({
      queryFn: async (formData, _, __, baseQuery) => {
        const {uploadImages, deleteImages} = getFirebaseUpload();

        try {
          const {tourId, existingImages, availableDates, ...tourData} = formData;
          const deletedTourImages = existingImages.filter(({isDeleted}) => isDeleted).map(({url}) => url);

          const imageUrls = await uploadImages(formData.images, formData.name);

          if (deletedTourImages.length) await deleteImages(deletedTourImages);

          const highlights = formData.highlights.map((highlight) => highlight.value);
          const existingTourImages = existingImages.filter(({isDeleted}) => !isDeleted).map(({url}) => url);
          const response = await baseQuery({
            url: `/admin/tour/${tourId}`,
            method: "PUT",
            body: {
              ...tourData,
              highlights,
              images: [...existingTourImages, ...imageUrls],
              availableDates: availableDates.map((date) => {
                return new Date(Date.UTC(date.getFullYear(), date.getMonth(), date.getDate()))
                  .toISOString()
                  .split("T")[0];
              }),
            },
            credentials: "include",
          });

          if (response.error) {
            const imagesToDelete = extractFirebaseImgPath(imageUrls, ImgPath.tours);

            await deleteImages(imagesToDelete);
            throw new Error("Failed to update tour");
          }

          return {data: {error: false}};
        } catch (error) {
          if (error instanceof Error) {
            return {error: {error: error.message} as FetchBaseQueryError};
          }

          return {error: {error: "Network Error"} as FetchBaseQueryError};
        }
      },
      invalidatesTags: (_, __, arg) => [
        {type: "Tour", id: arg.tourId},
        {type: "Tour", id: "LIST"},
      ],
    }),
    deleteTour: builder.mutation<void, string>({
      query: (tourId) => ({
        url: `/admin/tour/${tourId}`,
        method: "DELETE",
        credentials: "include",
      }),
      invalidatesTags: (_, __, tourId) => [
        {type: "Tour", id: tourId},
        {type: "Tour", id: "LIST"},
      ],
    }),
    getEarnings: builder.query<EarningsResponse, void>({
      query: () => ({url: "/admin/stats", credentials: "include"}),
      providesTags: ["Earnings"],
    }),
    getAdminPublishedTour: builder.query<PublishedToursResponse["tours"][number], string>({
      query: (tourId: string) => ({
        url: `/admin/tour/${tourId}`,
        credentials: "include",
      }),
      providesTags: (_, __, tourId) => [{type: "Tour", id: tourId}],
    }),
    getTotalBookings: builder.query<TotalBookingsResponse, BookingsBody>({
      query: ({page, status, bookingId}) => ({
        url: "/admin/bookings",
        params: bookingId ? {status, page, bookingId} : {status, page},
        credentials: "include",
      }),
      providesTags: (_, __, params) => [{type: "TotalBookings", id: params.status}],
    }),
    cancelBookedTour: builder.mutation<void, string>({
      query: (bookingId: string) => ({
        url: `/admin/bookings/${bookingId}/cancel`,
        method: "POST",
        credentials: "include",
      }),
    }),
    getUsers: builder.query<UsersResponse, UsersBody>({
      query: ({email, page}) => ({
        url: "/admin/users",
        params: email ? {email, page} : {page},
        credentials: "include",
      }),
    }),
    deleteUser: builder.mutation<void, string>({
      query: (email: string) => ({
        url: "/admin/users",
        method: "DELETE",
        params: {email},
        credentials: "include",
      }),
    }),
  }),
});

export const {
  useGetAdminPublishedToursQuery,
  useGetAdminPublishedTourQuery,
  useCreateTourMutation,
  useDeleteTourMutation,
  useGetEarningsQuery,
  useUpdateTourMutation,
  useGetTotalBookingsQuery,
  useCancelBookedTourMutation,
  useGetUsersQuery,
  useDeleteUserMutation,
} = adminApi;
