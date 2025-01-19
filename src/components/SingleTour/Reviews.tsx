import useReviewHandler from "../../hooks/useReviewHandler";
import useUserHandler from "../../hooks/useUserHandler";
import TourSectionLayout from "../../layouts/TourSectionLayout";
import PostReview from "./PostReview";
import TourRating from "./TourRating";
import TourReviews from "./TourReviews";

type ReviewsProps = {
  tourId: string;
};

const Reviews = ({tourId}: ReviewsProps) => {
  const {isLoggedIn} = useUserHandler();
  const {reviews, isError, isLoading, reviewTour, isReviewLoading} = useReviewHandler(tourId);

  return (
    <>
      <TourSectionLayout title="Customer Reviews">
        {reviews && !isError && !isLoading && (
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
              />
            )}
          </>
        )}

        {isLoggedIn && <PostReview onSubmit={reviewTour} isLoading={isReviewLoading} />}
      </TourSectionLayout>
    </>
  );
};

export default Reviews;
