import {useState} from "react";
import {PaxProps} from "../../../type";
import useModal from "../../../hooks/Shared/useModal";
import {TourListResponse} from "../../../redux/api/type";
import Button from "../Button/Button";
import Rating from "../Rating/Rating";
import Favorite from "../Others/Favorite";
import Carousel from "../Image/Carousel";
import Price from "../Price/Price";
import PriceDetailsModal from "./PriceDetailsModal";

type TourCard2Props = TourListResponse["tours"][0] & {pax?: PaxProps} & {
  className?: string;
  onSelect: (id: string, tourName: string, destination: string, duration: number) => void;
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
  const [isFavoriteTour, setFavoriteTour] = useState(isFavorite);
  const {showModal, openModal, onClose} = useModal();

  const total = (() => {
    if (pax) {
      let totalPrice = 0;

      if (pax?.adults) totalPrice += pax.adults * price.adult;
      if (pax?.teens) totalPrice += pax.teens * (price?.teen || 0);
      if (pax?.children) totalPrice += pax.children * (price?.child || 0);
      if (pax?.infants) totalPrice += pax.infants * (price?.infant || 0);

      return totalPrice;
    }

    return price.adult;
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
        {totalRatings > 0 && <Rating rating={averageRating} reviewCount={totalRatings} />}
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
          <div className="tourCard__price w-100">
            <div>{/* {offer && `$${getOriginalPrice(price, offer.percentage)}`} */}</div>
            <div className="d-flex flex-row justify-content-between flex-lg-column items-center">
              <p className="mb-1">
                Total{" "}
                <span className="text-20 fw-500 ml-5">
                  <Price price={total} />
                </span>
              </p>
              <button onClick={openModal} className="d-flex text-15 fw-500 text-accent-2 underline">
                Price details
              </button>
              <PriceDetailsModal price={price} showModal={showModal} onClose={onClose} />
            </div>
          </div>
        </div>
        <Button buttonType="secondary" onClick={() => onSelect(tourId, name, destination.split(",")[0], duration)}>
          View Details
        </Button>
      </div>
    </div>
  );
};

export default TourCard2;
