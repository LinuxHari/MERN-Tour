import {useCallback, useState} from "react";
import toast from "react-hot-toast";
import {UseFormReset} from "react-hook-form";
import _ from "lodash";
import {
  useCreateTourMutation,
  useGetAdminPublishedToursQuery,
  useDeleteTourMutation,
  useUpdateTourMutation,
} from "../../redux/api/adminApi";
import {EditTourSchemaType, TourSchemaType} from "../../schema/tourSchema";
import {MAX_UPLOAD_IMAGES, MIN_UPLOAD_IMAGES} from "../../config/adminConfig";

const useAdminTourHandler = () => {
  const [page, setPage] = useState(1);
  const [createTour, {isLoading}] = useCreateTourMutation();
  const [editTour, {isLoading: isUpdating}] = useUpdateTourMutation();
  const {data: publishedTours, isLoading: isTourLoading, isError: isTourError} = useGetAdminPublishedToursQuery(page);

  const [deleteTour, {isLoading: isDeletingTour}] = useDeleteTourMutation();

  const tourSubmitHandler = useCallback(async (formData: TourSchemaType, reset: UseFormReset<TourSchemaType>) => {
    const toastId = toast.loading("Adding new tour...");
    const {error} = await createTour({...formData});

    if (error) return toast.error("Failed to add tour", {id: toastId});
    toast.success("Tour was added successfully!", {id: toastId});
    reset();
  }, []);

  const updateTour = useCallback(
    async (
      formData: EditTourSchemaType,
      defaultValues: EditTourSchemaType,
      tourId: string,
      reset: UseFormReset<EditTourSchemaType>,
    ) => {
      if (_.isEqual(defaultValues, formData)) return toast.error("There are no changes to update");

      const numOfImages = formData.existingImages.length + formData.images.length;

      if (numOfImages > MAX_UPLOAD_IMAGES) return toast.error(`Only upto ${MAX_UPLOAD_IMAGES} images can be uploaded`);

      if (numOfImages < MIN_UPLOAD_IMAGES) return toast.error(`Atleast ${MIN_UPLOAD_IMAGES} images must be uploaded`);

      const toastId = toast.loading("updating tour...");
      const {error} = await editTour({...formData, tourId});

      if (error) return toast.error("Failed to update tour", {id: toastId});
      toast.success("Tour was updated successfully!", {id: toastId});
      reset();
    },
    [],
  );

  const deletePublishedTour = useCallback(async (tourId: string) => {
    const toastId = toast.loading("Deleting tour...");
    const {error} = await deleteTour(tourId);

    if (error) return toast.error("Failed deleting tour", {id: toastId});
    toast.success("Tour was deleted successfully!", {id: toastId});
  }, []);

  return {
    tourSubmitHandler,
    isLoading,
    publishedTours,
    deleteTour: deletePublishedTour,
    updateTour,
    isDeletingTour,
    isTourLoading,
    isUpdating,
    isTourError,
    page,
    setPage,
  };
};

export default useAdminTourHandler;
