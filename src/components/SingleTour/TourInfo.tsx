import {TourSchemaType} from "../../schema/tourSchema";
import {PaxProps} from "../../type";
import IncludedServices from "./IncludedServices";
import Itinerary from "./Itinerary";
import TourFAQ from "./TourFAQ";
import TourMap from "./TourMap";
import TourOverview from "./TourOverview";
import SideCard from "./SideCard";
import TourServices from "./TourServices";
import Reviews from "./Reviews";

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
  startDate: string;
  endDate: string;
  tourId: string;
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
  price,
  startDate,
  endDate,
  tourId,
}: TourInfoProps) => {
  return (
    <section className="layout-pt-md js-pin-container">
      <div className="container">
        <div className="row y-gap-30 d-flex justify-between">
          <div className="col-lg-8 order-lg-0 order-1">
            <TourServices
              duration={duration}
              minAge={minAge}
              capacity={capacity}
              languages={languages}
            />
            <TourOverview description={description} highlights={highlights} />
            <IncludedServices included={included} />
            <Itinerary itinerary={itinerary} />
            <TourMap location={itinerary} />
            <Reviews tourId={tourId} />
            <TourFAQ faq={faq} />
          </div>
          <div className="col-12 col-lg-4 order-lg-1 order-0">
            <SideCard
              pax={pax}
              price={price}
              startDate={startDate}
              endDate={endDate}
              tourId={tourId}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default TourInfo;
