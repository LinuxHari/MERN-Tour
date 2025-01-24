import {useState} from "react";
import toast from "react-hot-toast";
import {UseFormReset} from "react-hook-form";
import {
  useCreateTourMutation,
  useGetAdminPublishedToursQuery,
  useDeleteTourMutation,
} from "../redux/api/adminApi";
import {TourSchemaType} from "../schema/tourSchema";

const useAdminTourHandler = () => {
  const [page, setPage] = useState(1);
  const [createTour, {isLoading}] = useCreateTourMutation();
  const {
    data: publishedTours,
    isLoading: isTourLoading,
    isError: isTourError,
  } = useGetAdminPublishedToursQuery(page);

  const [deleteTour, {isLoading: isDeletingTour}] = useDeleteTourMutation();

  const tourSubmitHandler = async (
    formData: TourSchemaType,
    reset: UseFormReset<TourSchemaType>,
  ) => {
    const toastId = toast.loading("Adding new tour...");
    const {error} = await createTour({...formData});

    if (error) return toast.error("Failed to add tour", {id: toastId});
    toast.success("Tour was added successfully!", {id: toastId});
    reset();
  };

  const deletePublishedTour = async (tourId: string) => {
    const toastId = toast.loading("Deleting tour...");
    const {error} = await deleteTour(tourId);

    if (error) return toast.error("Failed deleting tour", {id: toastId});
    toast.success("Tour was deleted successfully!", {id: toastId});
  };

  return {
    tourSubmitHandler,
    isLoading,
    publishedTours,
    deleteTour: deletePublishedTour,
    isDeletingTour,
    isTourLoading,
    isTourError,
    page,
    setPage,
  };
};

export default useAdminTourHandler;
