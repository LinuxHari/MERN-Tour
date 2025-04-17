import useReviewHandler from "../../hooks/Users/useReviewHandler";
import useUserHandler from "../../hooks/Users/useUserHandler";
import TourSectionLayout from "../../layouts/TourSectionLayout";
import PostReview from "./PostReview";
import TourRating from "./TourRating";
import TourReviews from "./TourReviews";

type ReviewsProps = {
  tourId: string;
  canReview?: boolean;
};

const Reviews = ({tourId, canReview}: ReviewsProps) => {
  const {isLoggedIn} = useUserHandler();
  const {
    reviews,
    isError,
    isLoading,
    reviewTour,
    isReviewLoading,
    isReviewDeletionLoading,
    deleteUserReview,
    page,
    setPage,
    perPage,
    userReview,
    showReviewForm,
    setShowReviewForm,
    reviewFormRef,
  } = useReviewHandler(tourId);

  return (
    <>
      {reviews && !isError && !isLoading && (
        <TourSectionLayout title="Customer Reviews">
          <>
            <TourReviews
              location={reviews.location}
              food={reviews.food}
              price={reviews.price}
              rooms={reviews.rooms}
              amenities={reviews.amenities}
              overallRating={reviews.overallRating}
            />
            {Boolean(reviews.userReviews.length) && (
              <TourRating
                reviews={reviews.userReviews}
                totalCount={reviews.totalCount}
                isLoading={isLoading}
                page={page}
                setPage={setPage}
                perPage={perPage}
                setShowReviewForm={setShowReviewForm}
                isDeleting={isReviewDeletionLoading}
                deleteReview={deleteUserReview}
              />
            )}
          </>
        </TourSectionLayout>
      )}
      {isLoggedIn && canReview && (!userReview || showReviewForm) && (
        <div className="mt-40" ref={reviewFormRef}>
          <PostReview onSubmit={reviewTour} isLoading={isReviewLoading} defaultValues={userReview} />
        </div>
      )}
    </>
  );
};

export default Reviews;
