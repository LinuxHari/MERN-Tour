import useReviewHandler from "../../hooks/useReviewHandler";
import useUserHandler from "../../hooks/useUserHandler";
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
  const {reviews, isError, isLoading, reviewTour, isReviewLoading} = useReviewHandler(tourId);

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
              <TourRating reviews={reviews.userReviews} totalCount={reviews.totalCount} isLoading={isLoading} />
            )}
          </>
        </TourSectionLayout>
      )}
      {isLoggedIn && canReview && (
        <div className="mt-40">
          <PostReview onSubmit={reviewTour} isLoading={isReviewLoading} />
        </div>
      )}
    </>
  );
};

export default Reviews;
