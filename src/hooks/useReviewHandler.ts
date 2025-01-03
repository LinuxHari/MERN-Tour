import toast from "react-hot-toast";
import {FetchBaseQueryError} from "@reduxjs/toolkit/query";
import {useGetReviewQuery, useReviewMutation} from "../redux/api/baseApi";
import {RatingType} from "../schema/reviewSchema";

const useReviewHandler = (tourId: string) => {
  const {isLoading, data: reviews, isError} = useGetReviewQuery(tourId);
  const [review, {isLoading: isReviewLoading}] = useReviewMutation();

  const reviewTour = async (data: RatingType) => {
    const toastId = toast.loading("Reserving tour");
    const {error} = await review({...data, tourId});
    const reviewError = error as FetchBaseQueryError;

    if (reviewError)
      if (reviewError.status === 400) return toast.error("Failed to add review", {id: toastId});
      else if (reviewError.status === 401)
        return toast.error("You must be logged in to post reviews", {id: toastId});
      else return toast.error("Something went wrong", {id: toastId});
  };

  return {reviews, isLoading, isError, isReviewLoading, reviewTour};
};

export default useReviewHandler;
