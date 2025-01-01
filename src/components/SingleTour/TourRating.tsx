import { ReviewResponse } from "../../type";
import Avatar from "../Shared/Avatar/Avatar";

type TourRatingProps = {
  reviews: ReviewResponse["userReviews"];
  isLoading: boolean;
};

const TourRating = ({ reviews, isLoading }: TourRatingProps) => {
  if (isLoading) return <>Loading...</>;

  return (
    <>
      {reviews.map((review, index: number) => (
        <div className="pt-30" key={index}>
          <div className="row justify-between">
            <div className="col-auto">
              <div className="d-flex items-center">
                {/* <div className="size-40 rounded-full">
              <img
                src={review.profile}
                alt="image"
                className="img-cover"
              />
            </div> */}
                <Avatar type="small" string={review.name} profile={review.profile} />
                <div className="text-16 fw-500 ml-20">{review.name}</div>
              </div>
            </div>

            <div className="col-auto">
              <div className="text-14 text-light-2">{new Date(review.postedAt).toISOString().split("T")[0]}</div>
            </div>
          </div>

          <div className="d-flex items-center mt-15">
            <div className="d-flex x-gap-5">
              {review.overallRating} <i className="icon-star text-yellow-2 text-10"></i>
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
