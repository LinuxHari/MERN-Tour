import TourSectionLayout from "../../layouts/TourSectionLayout";
import TourRating from "./TourRating";

const TourReviews = () => {
  return (
    <TourSectionLayout title="Customer Reviews">
      <div className="overallRating mt-30">
        <div className="overallRating__list">
          <div className="overallRating__item">
            <div className="overallRating__content">
              <div className="overallRating__icon">
                <i className="icon-star-2 text-30 text-accent-1"></i>
              </div>

              <div className="overallRating__info">
                <h5 className="text-16 fw-500">Overall Rating</h5>
                <div className="lh-15">Excellent</div>
              </div>
            </div>

            <div className="overallRating__rating d-flex items-center">
              <i className="icon-star text-yellow-2 text-16"></i>
              <div className="text-16 fw-500 ml-10">5.0</div>
            </div>
          </div>

          <div className="overallRating__item">
            <div className="overallRating__content">
              <div className="overallRating__icon">
                <i className="icon-pin-2 text-30 text-accent-1"></i>
              </div>

              <div className="overallRating__info">
                <h5 className="text-16 fw-500">Location</h5>
                <div className="lh-15">Excellent</div>
              </div>
            </div>

            <div className="overallRating__rating d-flex items-center">
              <i className="icon-star text-yellow-2 text-16"></i>
              <div className="text-16 fw-500 ml-10">5.0</div>
            </div>
          </div>

          <div className="overallRating__item">
            <div className="overallRating__content">
              <div className="overallRating__icon">
                <i className="icon-application text-30 text-accent-1"></i>
              </div>

              <div className="overallRating__info">
                <h5 className="text-16 fw-500">Amenities</h5>
                <div className="lh-15">Excellent</div>
              </div>
            </div>

            <div className="overallRating__rating d-flex items-center">
              <i className="icon-star text-yellow-2 text-16"></i>
              <div className="text-16 fw-500 ml-10">5.0</div>
            </div>
          </div>

          <div className="overallRating__item">
            <div className="overallRating__content">
              <div className="overallRating__icon">
                <i className="icon-utensils text-30 text-accent-1"></i>
              </div>

              <div className="overallRating__info">
                <h5 className="text-16 fw-500">Food</h5>
                <div className="lh-15">Excellent</div>
              </div>
            </div>

            <div className="overallRating__rating d-flex items-center">
              <i className="icon-star text-yellow-2 text-16"></i>
              <div className="text-16 fw-500 ml-10">5.0</div>
            </div>
          </div>

          <div className="overallRating__item">
            <div className="overallRating__content">
              <div className="overallRating__icon">
                <i className="icon-price-tag text-30 text-accent-1"></i>
              </div>

              <div className="overallRating__info">
                <h5 className="text-16 fw-500">Price</h5>
                <div className="lh-15">Excellent</div>
              </div>
            </div>

            <div className="overallRating__rating d-flex items-center">
              <i className="icon-star text-yellow-2 text-16"></i>
              <div className="text-16 fw-500 ml-10">5.0</div>
            </div>
          </div>

          <div className="overallRating__item">
            <div className="overallRating__content">
              <div className="overallRating__icon">
                <i className="icon-bed-2 text-30 text-accent-1"></i>
              </div>

              <div className="overallRating__info">
                <h5 className="text-16 fw-500">Rooms</h5>
                <div className="lh-15">Excellent</div>
              </div>
            </div>

            <div className="overallRating__rating d-flex items-center">
              <i className="icon-star text-yellow-2 text-16"></i>
              <div className="text-16 fw-500 ml-10">5.0</div>
            </div>
          </div>

          <div className="overallRating__item">
            <div className="overallRating__content">
              <div className="overallRating__icon">
                <i className="icon-online-support-2 text-30 text-accent-1"></i>
              </div>

              <div className="overallRating__info">
                <h5 className="text-16 fw-500">Tour Operator</h5>
                <div className="lh-15">Excellent</div>
              </div>
            </div>
            <div className="overallRating__rating d-flex items-center">
              <i className="icon-star text-yellow-2 text-16"></i>
              <div className="text-16 fw-500 ml-10">5.0</div>
            </div>
          </div>
        </div>
      </div>
      {/* <TourRating/> */}
      
    </TourSectionLayout>
  );
};

export default TourReviews;
