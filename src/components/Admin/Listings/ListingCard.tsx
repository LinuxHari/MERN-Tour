import { ListingCardProps } from "../../../type"
import Rating from "../../Shared/Rating/Rating"

const ListingCard = ({img, location, title, rating, reviewCount, duration, price}: ListingCardProps) => {
  return (
    <div className="col-lg-6">
    <div className="border-1 rounded-12 px-20 py-20">
      <div className="row x-gap-20 y-gap-20 items-center">
        <div className="col-xxl-auto">
          <img src={img} alt="image" className="size-200 w-1/1 object-cover rounded-12" />
        </div>
        <div className="col">
          <div className="d-flex items-center">
            <i className="icon-pin mr-5"></i>
            {location}
          </div>
          <div className="text-18 lh-15 fw-500 mt-5">
            {title}
          </div>
          <div className="d-flex items-center mt-5">
            <Rating rating={rating} reviewCount={reviewCount} className="mr-10"/>
          </div>
          <div className="row y-gap-15 justify-between items-end pt-5">
            <div className="col-auto">
              <div className="d-flex items-center">
                <i className="icon-clock mr-5"></i>
                <div className="text-14">{duration} Days</div>
              </div>
            </div>
            <div className="col-auto">
              <div className="text-right md:text-left">
                From <span className="text-20 fw-500">${price}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  )
}

export default ListingCard