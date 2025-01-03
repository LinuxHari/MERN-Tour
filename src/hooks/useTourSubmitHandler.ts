import toast from "react-hot-toast";
import {UseFormReset} from "react-hook-form";
import {useCreateTourMutation} from "../redux/api/adminApi";
import {TourSchemaType} from "../schema/tourSchema";

const useTourSubmitHandler = (reset: UseFormReset<TourSchemaType>) => {
  const [createTour, {isLoading}] = useCreateTourMutation();

  const tourSubmitHandler = async (formData: TourSchemaType) => {
    const toastId = toast.loading("Adding new tour...");
    const {error} = await createTour({...formData});

    if (error) return toast.error("Failed to reserve tour", {id: toastId});
    toast.success("Tour added successfully!", {id: toastId});
    reset();
  };

  return {tourSubmitHandler, isLoading};
};

export default useTourSubmitHandler;
