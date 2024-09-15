import { UseFormReset } from "react-hook-form";
import { useCreateTourMutation } from "../redux/api/adminApi";
import { TourSchemaType } from "../schema/tourSchema";
import toast from "react-hot-toast";
import useAfterEffect from "./useAfterEffect";
import { useState } from "react";

const useTourSubmitHandler = (reset: UseFormReset<TourSchemaType>) => {
  const [createTour, {isLoading, isError, isSuccess }] = useCreateTourMutation();
  const [toastId, setToastId] = useState<string | null>(null)

  const tourSubmitHandler = async (formData: TourSchemaType) => {
    const toastId = toast.loading('Adding new tour...');
      setToastId(toastId)
      await createTour({ ...formData });
    } 

    useAfterEffect(() => {
     if(!isLoading && toastId){
      if(isError || !isSuccess){
        toast.error('Failed to add tour', { id: toastId });
      } else {
        toast.success('Tour added successfully!', { id: toastId });
        reset();
      }
     }
    },[isLoading, toastId, isError, isSuccess])

  return { tourSubmitHandler, isLoading };
};

export default useTourSubmitHandler;