import useReviewHandler from "../../hooks/useReviewHandler";
import PostReview from "./PostReview";
import TourRating from "./TourRating";
import TourReviews from "./TourReviews";

type ReviewsProps = {
  tourId: string;
};

const Reviews = ({tourId}: ReviewsProps) => {
  const {reviews, isError, isLoading, reviewTour, isReviewLoading} = useReviewHandler(tourId);

  return (
    <>
      {!isError && !isLoading && reviews && (
        <>
          <TourReviews />
          {Boolean(reviews.userReviews) && (
            <TourRating reviews={reviews.userReviews} isLoading={isLoading} />
          )}
        </>
      )}
      <PostReview onSubmit={reviewTour} isLoading={isReviewLoading} />
    </>
  );
};

export default Reviews;
