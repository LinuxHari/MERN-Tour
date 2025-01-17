import toast from "react-hot-toast";
import {UseFormReset} from "react-hook-form";
import {useCreateTourMutation, useGetAdminPublishedToursQuery} from "../redux/api/adminApi";
import {TourSchemaType} from "../schema/tourSchema";

const useAdminTourHandler = () => {
  const [createTour, {isLoading}] = useCreateTourMutation();
  const {
    data: publishedTours,
    isLoading: isTourLoading,
    isError: isTourError,
  } = useGetAdminPublishedToursQuery();

  const tourSubmitHandler = async (
    formData: TourSchemaType,
    reset: UseFormReset<TourSchemaType>,
  ) => {
    const toastId = toast.loading("Adding new tour...");
    const {error} = await createTour({...formData});

    if (error) return toast.error("Failed to reserve tour", {id: toastId});
    toast.success("Tour added successfully!", {id: toastId});
    reset();
  };

  return {tourSubmitHandler, isLoading, publishedTours, isTourLoading, isTourError};
};

export default useAdminTourHandler;
