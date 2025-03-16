import TourSectionLayout from "../../layouts/TourSectionLayout";
import {TourSchemaType} from "../../schema/tourSchema";
import Accordion from "../Shared/Accordion/Accordion";

type ItineraryProps = {
  itinerary: TourSchemaType["itinerary"];
};

const Itinerary = ({itinerary}: ItineraryProps) => {
  return (
    <TourSectionLayout title="Itinerary">
      <div className="mt-30">
        <Accordion type="single" className="roadmap accordion -roadmap js-accordion">
          {itinerary.map(({activity, details}, index) => (
            <Accordion.Item key={index} index={index} className="roadmap__item accordion__item">
              {index === 0 ? (
                <div className="roadmap__iconBig">
                  <i className="icon-pin" />
                </div>
              ) : index === itinerary.length - 1 ? (
                <div className="roadmap__iconBig">
                  <i className="icon-flag" />
                </div>
              ) : (
                <div className="roadmap__icon" />
              )}
              <div className="roadmap__wrap">
                <Accordion.Button className="accordion__button d-flex items-center justify-between" isShowIcon={false}>
                  <div className="roadmap__title">
                    Day {index + 1}: {activity}
                  </div>
                </Accordion.Button>

                <Accordion.Content index={index} className="accordion__content">
                  <div className="roadmap__content">{details}</div>
                </Accordion.Content>
              </div>
            </Accordion.Item>
          ))}
        </Accordion>
      </div>
    </TourSectionLayout>
  );
};

export default Itinerary;
