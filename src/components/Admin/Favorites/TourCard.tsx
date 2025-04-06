import {Link} from "react-router-dom";
import {transformToUrlName} from "../../../utils/urlNameTransformer";
import Rating from "../../Shared/Rating/Rating";
import Favorite from "../../Shared/Others/Favorite";
import Carousel from "../../Shared/Image/Carousel";
import {ListingCardProps} from "../../../redux/api/type";
import Price from "../../Shared/Price/Price";

type TourCardProps = ListingCardProps & {
  tourId: string;
  destination: string;
  className?: string;
  isFavorite?: boolean;
  showFavorite?: boolean;
};

const TourCard = ({
  images,
  title,
  rating,
  reviewCount,
  duration,
  price,
  tourId,
  destination,
  location,
  className = "",
  isFavorite = false,
}: TourCardProps) => {
  return (
    <div className={className}>
      <Link
        to={`/tours/${transformToUrlName(destination)}/${transformToUrlName(title)}/${tourId}`}
        className="tourCard -type-1 py-10 px-10 border-1 rounded-12  -hover-shadow"
      >
        <div className="tourCard__header">
          <div className="tourCard__image">
            {/* <Image src={img} alt={location} className="img-ratio rounded-12" /> */}
            <Carousel images={images} />
          </div>
          <Favorite tourId={tourId} isFavorite={isFavorite} />
        </div>

        <div className="tourCard__content d-flex flex-column justify-content-between px-10 pt-10">
          <div>
            <div className="tourCard__location d-flex items-center text-13 text-light-2">
              <i className="icon-pin d-flex text-16 text-light-2 mr-5" />
              {location}
            </div>

            <h3 className="tourCard__title text-16 fw-500 mt-1 line-clamp-2">
              <span>{title}</span>
            </h3>

            {reviewCount > 0 && (
              <div className="tourCard__rating d-flex items-center text-13">
                <Rating rating={rating} reviewCount={reviewCount} />
              </div>
            )}
          </div>
          <div className="d-flex justify-between items-center border-1-top text-13 text-dark-1 pt-10 mt-10">
            <div className="d-flex items-center">
              <i className="icon-clock text-16 mr-5" />
              {duration} Days
            </div>

            <div>
              From{" "}
              <span className="text-16 fw-500">
                <Price price={price} />
              </span>
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default TourCard;
