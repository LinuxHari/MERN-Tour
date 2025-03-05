import {useState} from "react";
import {PaxProps, TourListResponse} from "../../../type";
import Button from "../Button/Button";
import Rating from "../Rating/Rating";
import Favorite from "../Others/Favorite";
import Carousel from "../Image/Carousel";

type TourCard2Props = TourListResponse["tours"][0] & {pax: PaxProps} & {
  className?: string;
  onSelect: (
    id: string,
    tourName: string,
    destination: string,
    duration: number,
  ) => void;
};

const TourCard2 = ({
  tourId,
  name,
  description,
  price,
  freeCancellation,
  destination,
  duration,
  images,
  onSelect,
  pax,
  className = "",
  averageRating,
  totalRatings,
  isFavorite,
}: TourCard2Props) => {
  const {teens, adults, children, infants} = pax;
  const [isFavoriteTour, setFavoriteTour] = useState(isFavorite);

  const total = (() => {
    let totalPrice = 0;

    if (adults) totalPrice += adults * price.adult;
    if (teens) totalPrice += teens * (price?.teen || 0);
    if (children) totalPrice += children * (price?.child || 0);
    if (infants) totalPrice += infants * (price?.infant || 0);

    return totalPrice;
  })();

  return (
    <div className={`tourCard -type-2 ${className}`}>
      <div className="tourCard__image">
        <Carousel images={images} />

        {/* {offer && (
          <div className="tourCard__badge">
            <div className="bg-accent-1 rounded-12 text-white lh-11 text-13 px-15 py-10">
              {offer.percentage} % OFF
            </div>
          </div>
        )} */}

        {/* <div className="tourCard__favorite">
          <button
            className={`button size-35 bg-white rounded-full flex-center ${isFavoriteTour ? "bg-accent-1 text-white" : "-accent-1"}`}
            onClick={handleFavorite}
          >
            <i className="icon-heart text-15" />
          </button>
        </div> */}
        <Favorite
          tourId={tourId}
          isFavorite={isFavoriteTour || false}
          onClick={() => setFavoriteTour(!isFavoriteTour)}
        />
      </div>

      <div className="tourCard__content">
        {totalRatings > 0 && (
          <Rating rating={averageRating} reviewCount={totalRatings} />
        )}
        <div className="tourCard__location">
          <i className="icon-pin" />
          {destination}
        </div>

        <h3 className="tourCard__title mt-2 line-clamp-2">
          <span>{name}</span>
        </h3>
        <p className="tourCard__text mt-2 mb-2 line-clamp-4">{description}</p>
        {freeCancellation && (
          <div className="d-flex flex-wrap x-gap-20 y-gap-5 pt-30">
            {/* <div className="text-14 text-accent-1">
              <i className="icon-price-tag mr-10"></i>
              Best Price Guarantee
            </div> */}

            <div className="text-14 text-success">
              <i className="icon-check mr-10" />
              Free Cancellation
            </div>
          </div>
        )}
      </div>
      <div className="tourCard__info">
        <div>
          <div className="d-flex items-center text-14">
            <i className="icon-clock mr-10" />
            {duration} Days
          </div>
          <div className="tourCard__price">
            <div>
              {/* {offer && `$${getOriginalPrice(price, offer.percentage)}`} */}
            </div>
            <div className="d-flex items-center">
              Total <span className="text-20 fw-500 ml-5">${total}</span>
            </div>
          </div>
        </div>
        <Button
          buttonType="secondary"
          onClick={() =>
            onSelect(tourId, name, destination.split(",")[0], duration)
          }
        >
          View Details
        </Button>
      </div>
    </div>
  );
};

export default TourCard2;
