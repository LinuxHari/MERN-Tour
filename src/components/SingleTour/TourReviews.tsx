import {ReviewResponse} from "../../type";
import keyToTitle from "../../utils/keyToTitle";

type TourReviewsProps = Omit<ReviewResponse, "userReviews" | "totalCount">;

const TourReviews = (tourReviewProps: TourReviewsProps) => {
  const reviewTags = {1: "Very bad", 2: "Bad", 3: "Good", 4: "Very good", 5: "Excellent"};

  const {overallRating, ...otherReviews} = tourReviewProps;

  return (
    <div className="overallRating mt-30">
      <div className="overallRating__list">
        <div className="overallRating__item">
          <div className="overallRating__content">
            <div className="overallRating__icon">
              <i className="icon-star-2 text-30 text-accent-1" />
            </div>

            <div className="overallRating__info">
              <h5 className="text-16 fw-500">Overall Rating</h5>
              <div className="lh-15">{reviewTags[overallRating as keyof typeof reviewTags]}</div>
            </div>
          </div>

          <div className="overallRating__rating d-flex items-center">
            <i className="icon-star text-yellow-2 text-16" />
            <div className="text-16 fw-500 ml-10">{overallRating.toFixed(1)}</div>
          </div>
        </div>

        {Object.entries(otherReviews).map(([key, value]) => (
          <div className="overallRating__item" key={key}>
            <div className="overallRating__content">
              <div className="overallRating__icon">
                <i className="icon-pin-2 text-30 text-accent-1" />
              </div>

              <div className="overallRating__info">
                <h5 className="text-16 fw-500">{keyToTitle(key)}</h5>
                <div className="lh-15">{reviewTags[value as keyof typeof reviewTags]}</div>
              </div>
            </div>

            <div className="overallRating__rating d-flex items-center">
              <i className="icon-star text-yellow-2 text-16" />
              <div className="text-16 fw-500 ml-10">{value.toFixed(1)}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TourReviews;
