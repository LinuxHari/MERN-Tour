import TourSectionLayout from "../../layouts/TourSectionLayout";
import { TourSchemaType } from "../../schema/tourSchema";
import Accordion from "../Shared/Accordion/Accordion";

type ItineraryProps = {
  itinerary: TourSchemaType["itinerary"];
};

const Itinerary = ({ itinerary }: ItineraryProps) => {
  
  const renderIcon = (index: number) => {
    if (index === 0)
      return (
        <div className="roadmap__iconBig">
          <i className="icon-pin"></i>
        </div>
      );
    else if (index === itinerary.length - 1)
      return (
        <div className="roadmap__iconBig">
          <i className="icon-flag"></i>
        </div>
      );
    else return <div className="roadmap__icon"></div>;
  };

  return (
    <TourSectionLayout title="Itinerary">
      <div className="mt-30">
        <Accordion type="single" className="roadmap accordion -roadmap js-accordion">
          {itinerary.map(({ activity, details }, index) => (
            <Accordion.Item key={index} index={index} className="roadmap__item accordion__item">
              {renderIcon(index)}
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
