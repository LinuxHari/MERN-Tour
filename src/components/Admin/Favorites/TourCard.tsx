import { ListingCardProps } from "../../../type";
import Rating from "../../shared/Rating/Rating";

type Props = ListingCardProps & {
  className?: string
}

const TourCard = ({ img, location, title, rating, reviewCount, duration, price, className="" }:Props) => (
    <div className={className}>
      <a
        href="#"
        className="tourCard -type-1 py-10 px-10 border-1 rounded-12  -hover-shadow"
      >
        <div className="tourCard__header">
          <div className="tourCard__image ratio ratio-28:20">
            <img
              src={img}
              alt="image"
              className="img-ratio rounded-12"
            />
          </div>
  
          <button className="tourCard__favorite">
            <i className="icon-heart"></i>
          </button>
        </div>
  
        <div className="tourCard__content px-10 pt-10">
          <div className="tourCard__location d-flex items-center text-13 text-light-2">
            <i className="icon-pin d-flex text-16 text-light-2 mr-5"></i>
            {location}
          </div>
  
          <h3 className="tourCard__title text-16 fw-500 mt-5">
            <span className="line-clamp-2">{title.length < 55? title: (title.slice(0,55) + "...") }</span>
          </h3>
  
          <div className="tourCard__rating d-flex items-center text-13 mt-5">
            <Rating rating={rating} reviewCount={reviewCount}/>
          </div>
  
          <div className="d-flex justify-between items-center border-1-top text-13 text-dark-1 pt-10 mt-10">
            <div className="d-flex items-center">
              <i className="icon-clock text-16 mr-5"></i>{duration} Days
            </div>
  
            <div>
              From <span className="text-16 fw-500">${price}</span>
            </div>
          </div>
        </div>
      </a>
    </div>
  );

export default TourCard