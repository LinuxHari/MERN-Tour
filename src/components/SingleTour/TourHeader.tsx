// import { SingleTourResponse } from "../../type"
import Label from "../Shared/Label/Label";
import Share from "./Share";
// import Rating from "../Shared/Rating/Rating"
import TourGallery from "./TourGallery";

type TourHeaderProps = {
  freeCancellation: boolean;
  name: string;
  images: string[];
  destination: string;
  description: string;
};

const TourHeader = ({
  freeCancellation,
  name,
  images,
  destination,
  description,
}: TourHeaderProps) => {
  return (
    <section className="">
      <div className="container">
        <div className="row y-gap-20 justify-between items-end">
          <div className="col-auto">
            <div className="row x-gap-10 y-gap-10 items-center">
              {/* {freeCancellation && <Label type={1}>Best seller</Label>} */}
              {freeCancellation && <Label>Free cancellation</Label>}
            </div>

            <h2 className="text-40 sm:text-30 lh-14">{name}</h2>

            <div className="row x-gap-20 y-gap-20 items-center">
              {/* <div className="col-auto">
                <Rating rating={rating} reviewCount={reviewCount}/>
              </div> */}

              <div className="col-auto">
                <div className="d-flex items-center">
                  <i className="icon-pin text-16 mr-5" />
                  {destination}
                </div>
              </div>

              {/* <div className="col-auto">
                <div className="d-flex items-center">
                  <i className="icon-reservation text-16 mr-5"></i>
                  {totalBookings} booked
                </div>
              </div> */}
            </div>
          </div>

          <div className="col-auto">
            <div className="d-flex x-gap-30 y-gap-10">
              <Share
                title={name}
                description={description}
                url={window.location.href}
              />
              {/* <a href="/" className="d-flex items-center">
                <i className="icon-heart flex-center text-16 mr-10" />
                Wishlist
              </a> */}
            </div>
          </div>
        </div>
        <TourGallery images={images} />
      </div>
    </section>
  );
};

export default TourHeader;
