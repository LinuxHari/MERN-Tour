import {ReviewResponse} from "../../redux/api/type";
import Avatar from "../Shared/Avatar/Avatar";
import Button from "../Shared/Button/Button";
import Pagination from "../Shared/Pagination/Pagination";
import SearchSkeleton from "../Skeletons/SearchSkeleton";

type TourRatingProps = {
  reviews: ReviewResponse["userReviews"];
  isLoading: boolean;
  totalCount: number;
  page: number;
  setPage: (page: number) => void;
  perPage: number;
  setShowReviewForm: () => void;
  isDeleting: boolean;
  deleteReview: () => void;
};

const TourRating = ({
  reviews,
  isLoading,
  totalCount,
  page,
  perPage,
  setPage,
  setShowReviewForm,
  isDeleting,
  deleteReview,
}: TourRatingProps) => {
  if (isLoading) return <SearchSkeleton />;

  return (
    <>
      <h4 className="mt-5">{totalCount} User Reviews</h4>
      {reviews.map((review, index: number) => (
        <div className="pt-30" key={index}>
          <div className="row align-items-center justify-content-between">
            <div className="col-auto">
              <div className="d-flex items-center">
                <Avatar type="small" string={review.name} profile={review.profile} />
                <div className="text-16 fw-500 ml-10">{review.name}</div>
              </div>
            </div>

            <div className="col-auto">
              <div className="text-14 text-light-2">{new Date(review.postedAt).toISOString().split("T")[0]}</div>
            </div>
          </div>

          <div className="d-flex mt-15">
            <div className="d-flex align-items-center x-gap-5">
              {review.overallRating} <i className="icon-star text-yellow-2 text-10" />
            </div>
            <div className="text-16 fw-500 ml-10">{review.title}</div>
          </div>

          <p className="mt-10">{review.comment}</p>

          {review.isUserReview && (
            <div className="d-flex justify-content-end x-gap-40 px-3">
              <Button type="button" className="mx-1" buttonType="icon" disabled={isDeleting} onClick={deleteReview}>
                <i className="icon-delete" />
              </Button>
              <Button type="button" buttonType="icon" onClick={setShowReviewForm}>
                <i className="icon-pencil" />
              </Button>
            </div>
          )}
        </div>
      ))}
      {totalCount > perPage && <Pagination totalCount={totalCount} page={page} setPage={setPage} perPage={perPage} />}
    </>
  );
};

export default TourRating;
