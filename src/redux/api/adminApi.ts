import {FetchBaseQueryError} from "@reduxjs/toolkit/query";
import {ImgPath} from "../../type";
import {EditTourSchemaType, TourSchemaType} from "../../schema/tourSchema";
import getFirebaseUpload from "../../utils/getFirebaseUpload";
import {extractFirebaseImgPath} from "../../utils/extractFirebaseImgPath";
import {baseApi} from "./baseApi";
import {EarningsResponse, PublishedToursResponse, TourMutationResponse} from "./type";

export const adminApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getAdminPublishedTours: builder.query<PublishedToursResponse, number>({
      query: (page) => ({
        url: "/admin/tour",
        params: {page},
        credentials: "include",
      }),
      providesTags: ["Tour"],
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
      invalidatesTags: ["Tour"],
    }),
    updateTour: builder.mutation<TourMutationResponse, EditTourSchemaType & {tourId: string}>({
      queryFn: async (formData, _, __, baseQuery) => {
        const {uploadImages, deleteImages} = getFirebaseUpload();

        try {
          const {tourId, existingImages, ...tourData} = formData;
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
      invalidatesTags: ["Tour"],
    }),
    deleteTour: builder.mutation<void, string>({
      query: (tourId) => ({
        url: `/admin/tour/${tourId}`,
        method: "DELETE",
        credentials: "include",
      }),
      invalidatesTags: ["Tour"],
    }),
    getEarnings: builder.query<EarningsResponse, void>({
      query: () => ({url: "/admin/stats", credentials: "include"}),
    }),
  }),
});

export const {
  useGetAdminPublishedToursQuery,
  useCreateTourMutation,
  useDeleteTourMutation,
  useGetEarningsQuery,
  useUpdateTourMutation,
} = adminApi;
