import Rating from "../../Shared/Rating/Rating";
import {transformToUrlName} from "../../../utils/urlNameTransformer";
import Button from "../../Shared/Button/Button";
import useAdminTourHandler from "../../../hooks/Admin/useAdminTourHandler";
import Carousel from "../../Shared/Image/Carousel";
import {ListingCardProps} from "../../../redux/api/type";
import Price from "../../Shared/Price/Price";

const ListingCard = ({
  images,
  duration,
  price,
  location,
  title,
  rating,
  reviewCount,
  destination,
  tourId,
}: ListingCardProps) => {
  const {deleteTour, isDeletingTour} = useAdminTourHandler();

  return (
    <div className="col-sm-12 col-lg-6 col-xl-4">
      <div className="tourCard -type-1 py-10 px-10 border-1 rounded-12 -hover-shadow">
        <div className="tourCard__header">
          <div className="tourCard__image">
            <Carousel images={images} />
          </div>

          <button className="tourCard__favorite top-5" onClick={() => deleteTour(tourId)} disabled={isDeletingTour}>
            <i className="icon-delete" />
          </button>
        </div>

        <div className="tourCard__content d-flex flex-column justify-content-between px-10 pt-10">
          <div>
            <div className="tourCard__location d-flex items-center text-13 text-light-2">
              <i className="icon-pin d-flex text-16 text-light-2 mr-5" />
              {location}
            </div>

            <h3 className="tourCard__title text-16 fw-500 mt-1">
              <span className="line-clamp-2">{title.length < 55 ? title : title.slice(0, 55) + "..."}</span>
            </h3>

            {reviewCount > 0 && (
              <div className="tourCard__rating d-flex items-center text-13">
                <Rating rating={rating} reviewCount={reviewCount} />
              </div>
            )}
          </div>

          <div className="d-flex justify-between items-center text-13 text-dark-1 pt-10 mt-10">
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
        <div className="d-flex justify-between gap-2 items-center border-1-top text-13 text-dark-1 pt-10 mt-10">
          <Button
            className="py-1 px-4 w-50 rounded"
            type="button"
            styleType="secondary"
            buttonType="link"
            to={`/dashboard/edit-tour/${tourId}`}
          >
            Edit
          </Button>
          <Button
            className="py-1 px-4 rounded w-50"
            type="button"
            buttonType="link"
            to={`/tours/${transformToUrlName(destination)}/${transformToUrlName(title)}/${tourId}`}
          >
            View
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ListingCard;
