import { FetchBaseQueryError } from "@reduxjs/toolkit/query";
import { ImgPath, PostResponse, Tour } from "../../type";
import { baseApi } from "./baseApi";
import { TourSchemaType } from "../../schema/tourSchema";
import useFirebaseUpload from "../../hooks/useFirebaseUpload";
import { extractFirebaseImgPath } from "../../utils/extractFirebaseImgPath";

export const adminApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getAdminPublishedTours: builder.query<Tour, string>({
      query: () => "/admin",
      providesTags: (_, __, id) => [{ type: "Tour", id }],
      transformResponse: (response: { data: Tour }) => response.data,
      transformErrorResponse: (response) => {
        const errorData = response.data as { message?: string };
        return errorData.message || "Something went wrong";
      },
    }),
    createTour: builder.mutation<PostResponse, TourSchemaType>({
      queryFn: async (formData, _, __, baseQuery) => {
        const { uploadImages, deleteImages } = useFirebaseUpload();

        try {
          const imageUrls = await uploadImages(formData.images, formData.name);

          const highlights = formData.highlights.map((highlight) => highlight.value)

          const tourData:Tour = {...formData, images: imageUrls, highlights}

          const response = await baseQuery({
            url: "/admin/add-tour",
            method: "POST",
            body: tourData,
          });

          console.log(response, "response");
          

          if (response.error) {
            const imagesToDelete = extractFirebaseImgPath(imageUrls, ImgPath.tours);
            await deleteImages(imagesToDelete);    
            throw new Error("Failed to add tour")
          }

          return { data: response.data as PostResponse };
        } catch (error) {
          if (error instanceof Error) {            
            return { error: { error: error.message } as FetchBaseQueryError };
          }
          return { error: { error: "Network Error" } as FetchBaseQueryError };
        }
      },
    }),
  }),
});

export const { useGetAdminPublishedToursQuery, useCreateTourMutation } = adminApi;
