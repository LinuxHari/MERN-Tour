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

  if (!reviews) return null;

  const {userReviews, totalCount, ...ratings} = reviews;

  return (
    <>
      {!isError && !isLoading && (
        <TourSectionLayout title="Customer Reviews">
          <>
            <TourReviews {...ratings} />
            {Boolean(userReviews) && (
              <TourRating reviews={userReviews} totalCount={totalCount} isLoading={isLoading} />
            )}
          </>

          {isLoggedIn && <PostReview onSubmit={reviewTour} isLoading={isReviewLoading} />}
        </TourSectionLayout>
      )}
    </>
  );
};

export default Reviews;
