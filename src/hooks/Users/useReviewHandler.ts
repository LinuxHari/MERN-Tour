import {useCallback, useEffect, useRef, useState} from "react";
import toast from "react-hot-toast";
import {FetchBaseQueryError} from "@reduxjs/toolkit/query";
import isEqual from "lodash/isEqual";
import {
  useDeleteReviewMutation,
  useGetReviewQuery,
  useReviewMutation,
  useUpdateReviewMutation,
} from "../../redux/api/baseApi";
import {RatingType} from "../../schema/reviewSchema";

const useReviewHandler = (tourId: string) => {
  const perPage = 10;
  const [page, setPage] = useState(1);
  const {isLoading, data: reviews, isError} = useGetReviewQuery({tourId, page, limit: perPage});
  const [review, {isLoading: isReviewLoading}] = useReviewMutation();
  const [updateReview, {isLoading: isReviewUpdateLoading}] = useUpdateReviewMutation();
  const [deleteReview, {isLoading: isReviewDeletionLoading}] = useDeleteReviewMutation();
  const [showReviewForm, setShowReviewForm] = useState(false);
  const reviewFormRef = useRef<HTMLDivElement>(null);

  const userReview = page === 1 && reviews?.userReviews?.[0]?.isUserReview ? reviews.userReviews[0] : undefined;

  const reviewTour = async (data: RatingType) => {
    const toastId = toast.loading("Adding review");
    const {error} = await review({...data, tourId});
    const reviewError = error as FetchBaseQueryError;

    if (reviewError) {
      if (reviewError.status === 400) return toast.error("Failed to add review", {id: toastId});
      else if (reviewError.status === 401) return toast.error("You must be logged in to post reviews", {id: toastId});
      else return toast.error("Something went wrong", {id: toastId});
    }

    toast.success("Review is added successfully", {id: toastId});
  };

  const updateUserReview = async (data: RatingType) => {
    const {title, comment, ratings} = userReview!;

    if (isEqual({ratings, title, comment}, data)) return toast.error("No changes to update");

    const toastId = toast.loading("Updating review");
    const {error} = await updateReview({...data, tourId});
    const reviewError = error as FetchBaseQueryError;

    if (reviewError) {
      if (reviewError.status === 400) return toast.error("Failed to update review", {id: toastId});
      else if (reviewError.status === 401) return toast.error("You must be logged in to update review", {id: toastId});
      else return toast.error("Something went wrong", {id: toastId});
    }

    toast.success("Review is updated successfully", {id: toastId});
  };

  const deleteUserReview = async () => {
    const toastId = toast.loading("Deleting review");
    const {error} = await deleteReview(tourId);
    const reviewError = error as FetchBaseQueryError;

    if (reviewError) {
      if (reviewError.status === 400) return toast.error("Failed to delete review", {id: toastId});
      else if (reviewError.status === 401) return toast.error("You must be logged in to delete review", {id: toastId});
      else return toast.error("Something went wrong", {id: toastId});
    }

    toast.success("Review is deleted successfully", {id: toastId});
  };

  const handlePage = useCallback((page: number) => setPage(page), []);

  const handleShowReviewForm = useCallback(() => setShowReviewForm(true), []);

  useEffect(() => {
    if (reviewFormRef.current && showReviewForm) {
      const elementTop = reviewFormRef.current.getBoundingClientRect().top + window.scrollY;

      window.scrollTo({
        top: elementTop - 100,
        behavior: "smooth",
      });
    }
  }, [showReviewForm]);

  return {
    reviews,
    isLoading: isLoading || isReviewUpdateLoading,
    isError,
    isReviewLoading,
    reviewTour: userReview ? updateUserReview : reviewTour,
    isReviewDeletionLoading,
    deleteUserReview,
    page,
    setPage: handlePage,
    perPage,
    userReview,
    showReviewForm,
    setShowReviewForm: handleShowReviewForm,
    reviewFormRef,
  };
};

export default useReviewHandler;
