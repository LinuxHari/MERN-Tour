import {  TourListResponse } from "../../../type";
import Button from "../Button/Button";

type TourCard2Props = TourListResponse["tours"][0] & {className?: string, onSelect: (id: string, duration: number) => void}

const TourCard2 = ( {tourId ,name, description, price, freeCancellation, destination, duration, images, onSelect, className=""}: TourCard2Props) => {
  return (
    <div className={`tourCard -type-2 ${className}`}>
      <div className="tourCard__image">
        <img src={images[0]} alt="image" />

        {/* {offer && (
          <div className="tourCard__badge">
            <div className="bg-accent-1 rounded-12 text-white lh-11 text-13 px-15 py-10">
              {offer.percentage} % OFF
            </div>
          </div>
        )} */}

        <div className="tourCard__favorite">
          <button className="button -accent-1 size-35 bg-white rounded-full flex-center">
            <i className="icon-heart text-15"></i>
          </button>
        </div>
      </div>

      <div className="tourCard__content">
        <div className="tourCard__location">
          <i className="icon-pin"></i>
          {destination}
        </div>

        <h3 className="tourCard__title mt-2">
          <span>{name}</span>
        </h3>
        {/* <Rating rating={rating} reviewCount={reviewCount} /> */}
        <p className="tourCard__text mt-2 mb-2">{description}</p>
        {freeCancellation && (
          <div className="d-flex flex-wrap x-gap-20 y-gap-5 pt-30">
            <div className="text-14 text-accent-1">
              <i className="icon-price-tag mr-10"></i>
              Best Price Guarantee
            </div>

            <div className="text-14">
              <i className="icon-check mr-10"></i>
              Free Cancellation
            </div>
          </div>
        )}
      </div>
      <div className="tourCard__info">
        <div>
          <div className="d-flex items-center text-14">
            <i className="icon-clock mr-10"></i>
            {duration} Days
          </div>
          <div className="tourCard__price">
            <div>
              {/* {offer && `$${getOriginalPrice(price, offer.percentage)}`} */}
            </div>
            <div className="d-flex items-center">
              From <span className="text-20 fw-500 ml-5">${price}</span>
            </div>
          </div>
        </div>
        <Button buttonType="secondary" onClick={() => onSelect(tourId, duration)}>View Details</Button>
      </div>
    </div>
  );
};

export default TourCard2;
