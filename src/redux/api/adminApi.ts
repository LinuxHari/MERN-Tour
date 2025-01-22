import {FetchBaseQueryError} from "@reduxjs/toolkit/query";
import {ImgPath, Tour} from "../../type";
import {TourSchemaType} from "../../schema/tourSchema";
import getFirebaseUpload from "../../utils/getFirebaseUpload";
import {extractFirebaseImgPath} from "../../utils/extractFirebaseImgPath";
import {baseApi} from "./baseApi";

type CreateTourResponse = {
  publisherId: string;
};

type PublishedToursResponse = {
  tours: (Tour & {totalRatings: number; averageRating: number; duration: number})[];
  totalPages: number;
  totalCount: number;
} & CreateTourResponse;

export const adminApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getAdminPublishedTours: builder.query<PublishedToursResponse, number>({
      query: (page) => ({url: "/admin/tour", params: {page}, credentials: "include"}),
      providesTags: (data) =>
        data
          ? [
              // ...data.tours.map((tour) => ({
              //   type: "Tour" as const,
              //   id: tour.tourId,
              // })),
              {type: "Tour", id: data.publisherId},
            ]
          : [],
    }),
    createTour: builder.mutation<CreateTourResponse, TourSchemaType>({
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

          return {data: response.data as CreateTourResponse};
        } catch (error) {
          if (error instanceof Error) {
            return {error: {error: error.message} as FetchBaseQueryError};
          }

          return {error: {error: "Network Error"} as FetchBaseQueryError};
        }
      },
      invalidatesTags: (data) => (data?.publisherId ? [{type: "Tour", id: data.publisherId}] : []),
    }),
  }),
});

export const {useGetAdminPublishedToursQuery, useCreateTourMutation} = adminApi;
