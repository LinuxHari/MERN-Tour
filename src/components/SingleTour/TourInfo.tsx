import IncludedServices from "./IncludedServices";
import Itinerary from "./Itinerary";
import PostReview from "./PostReview";
import TourFAQ from "./TourFAQ";
import TourMap from "./TourMap";
import TourOverview from "./TourOverview";
import TourReviews from "./TourReviews";
import SideCard from "./SideCard";
import TourServices from "./TourServices";

const TourInfo = () => {
  return (
    <section className="layout-pt-md js-pin-container">
      <div className="container">
        <div className="row y-gap-30 justify-between">
          <div className="col-lg-8">
            <TourServices />
            <TourOverview />
            <IncludedServices />
            <Itinerary />
            <TourMap />
            <TourFAQ />
            <TourReviews />
            <PostReview />
          </div>
          <div className="col-lg-4">
            <SideCard />
          </div>
        </div>
      </div>
    </section>
  );
};

export default TourInfo;
