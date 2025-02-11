import {ReviewResponse} from "../../type";
import Avatar from "../Shared/Avatar/Avatar";

type TourRatingProps = {
  reviews: ReviewResponse["userReviews"];
  isLoading: boolean;
  totalCount: number;
};

const TourRating = ({reviews, isLoading, totalCount}: TourRatingProps) => {
  if (isLoading) return <>Loading...</>;

  return (
    <>
      <h4 className="mt-5">{totalCount} User Reviews</h4>
      {reviews.map((review, index: number) => (
        <div className="pt-30" key={index}>
          <div className="row align-items-center justify-content-between">
            <div className="col-auto">
              <div className="d-flex items-center">
                <Avatar
                  type="small"
                  string={review.name}
                  profile={review.profile}
                />
                <div className="text-16 fw-500 ml-10">{review.name}</div>
              </div>
            </div>

            <div className="col-auto">
              <div className="text-14 text-light-2">
                {new Date(review.postedAt).toISOString().split("T")[0]}
              </div>
            </div>
          </div>

          <div className="d-flex mt-15">
            <div className="d-flex align-items-center x-gap-5">
              {review.overallRating}{" "}
              <i className="icon-star text-yellow-2 text-10" />
            </div>
            <div className="text-16 fw-500 ml-10">{review.title}</div>
          </div>

          <p className="mt-10">{review.comment}</p>
        </div>
      ))}
      {/* 
    <button className="button -md -outline-accent-1 text-accent-1 mt-30">
      See more reviews
      <i className="icon-arrow-top-right text-16 ml-10"></i>
    </button> */}
    </>
  );
};

export default TourRating;
