import IncludedServices from "./IncludedServices";
import Itinerary from "./Itinerary";
// import PostReview from "./PostReview";
import TourFAQ from "./TourFAQ";
// import TourMap from "./TourMap";
import TourOverview from "./TourOverview";
import TourReviews from "./TourReviews";
import SideCard from "./SideCard";
import TourServices from "./TourServices";
import { TourSchemaType } from "../../schema/tourSchema";
import { PaxProps } from "../../type";

type TourInfoProps = {
  duration: number;
  minAge: number;
  capacity: number;
  languages: string[];
  description: string;
  highlights: string[];
  itinerary: TourSchemaType["itinerary"];
  faq: TourSchemaType["faq"];
  included: TourSchemaType["included"];
  pax: PaxProps;
  price: TourSchemaType["price"];
};

const TourInfo = ({
  duration,
  minAge,
  capacity,
  languages,
  description,
  highlights,
  itinerary,
  faq,
  included,
  pax,
  price
}: TourInfoProps) => {
  return (
    <section className="layout-pt-md js-pin-container">
      <div className="container">
        <div className="row y-gap-30 justify-between">
          <div className="col-lg-8">
            <TourServices duration={duration} minAge={minAge} capacity={capacity} languages={languages} />
            <TourOverview description={description} highlights={highlights} />
            <IncludedServices included={included} />
            <Itinerary itinerary={itinerary} />
            {/* <TourMap /> */}
            <TourFAQ faq={faq} />
            <TourReviews />
            {/* <PostReview /> */}
          </div>
          <div className="col-lg-4">
            <SideCard pax={pax} price={price} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default TourInfo;
