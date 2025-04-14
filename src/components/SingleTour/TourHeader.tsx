// import { SingleTourResponse } from "../../type"
import Label from "../Shared/Label/Label";
import Rating from "../Shared/Rating/Rating";
import Share from "./Share";
// import Rating from "../Shared/Rating/Rating"
import TourGallery from "./TourGallery";

type TourHeaderProps = {
  freeCancellation: boolean;
  name: string;
  images: string[];
  destination: string;
  description: string;
  totalRatings: number;
  averageRating: number;
};

const TourHeader = ({
  freeCancellation,
  name,
  images,
  destination,
  description,
  totalRatings,
  averageRating,
}: TourHeaderProps) => {
  return (
    <section className="">
      <div className="container">
        <div className="row y-gap-20 justify-between items-end">
          <div className="col-auto">
            <div className="row x-gap-10 items-center">{freeCancellation && <Label>Free cancellation</Label>}</div>
            <h2 className="text-40 sm:text-30">{name}</h2>
            <div className="row x-gap-20 y-gap-20 items-center">
              <div className="d-flex  x-gap-10  y-gap-10 flex-wrap w-100 align-items-center">
                {totalRatings > 0 && (
                  <div className="d-flex align-items-center flex-shrink-0 me-2">
                    <Rating rating={averageRating} reviewCount={totalRatings} type="multiple" />
                  </div>
                )}

                <div className="d-flex flex-wrap y-gap-10 flex-grow-1 x-gap-10 justify-content-between align-items-center">
                  <div className="d-flex align-items-center text-16 text-nowrap text-light-2">
                    <i className="icon-pin me-2" />
                    {destination}
                  </div>

                  <div className="d-flex align-items-center justify-content-end flex-shrink-0">
                    <Share title={name} description={description} url={window.location.href} />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <TourGallery images={images} />
      </div>
    </section>
  );
};

export default TourHeader;
