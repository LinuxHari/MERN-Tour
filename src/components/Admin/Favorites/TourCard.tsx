import {Link} from "react-router-dom";
import {ListingCardProps} from "../../../type";
import Rating from "../../Shared/Rating/Rating";
import Favorite from "../../Shared/Others/Favorite";

type TourCardProps = ListingCardProps & {
  tourId: string;
  destinationId: string;
  className?: string;
  isFavorite?: boolean;
  showFavorite?: boolean;
};

const TourCard = ({
  img,
  location,
  title,
  rating,
  reviewCount,
  duration,
  price,
  tourId,
  destinationId,
  className = "",
  isFavorite = false,
}: TourCardProps) => {
  return (
    <div className={className}>
      <Link
        to={`/tours/${destinationId}/${tourId}`}
        className="tourCard -type-1 py-10 px-10 border-1 rounded-12  -hover-shadow"
      >
        <div className="tourCard__header">
          <div className="tourCard__image ratio ratio-28:20">
            <img src={img} alt={location} className="img-ratio rounded-12" />
          </div>

          {/* <button
            className={`tourCard__favorite ${isFavorite ? "bg-accent-1" : ""}`}
            onClick={removeTour}
          >
            <i className={`icon-heart ${isFavorite ? "text-white" : ""}`} />
          </button> */}
          <Favorite tourId={tourId} isFavorite={isFavorite} />
        </div>

        <div className="tourCard__content px-10 pt-10">
          <div className="tourCard__location d-flex items-center text-13 text-light-2">
            <i className="icon-pin d-flex text-16 text-light-2 mr-5" />
            {location}
          </div>

          <h3 className="tourCard__title text-16 fw-500 mt-1">
            <span className="line-clamp-2">
              {title.length < 55 ? title : title.slice(0, 55) + "..."}
            </span>
          </h3>

          <div className="tourCard__rating d-flex items-center text-13">
            <Rating rating={rating} reviewCount={reviewCount} />
          </div>

          <div className="d-flex justify-between items-center border-1-top text-13 text-dark-1 pt-10 mt-10">
            <div className="d-flex items-center">
              <i className="icon-clock text-16 mr-5" />
              {duration} Days
            </div>

            <div>
              From <span className="text-16 fw-500">${price}</span>
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default TourCard;
