import TourSectionLayout from "../../layouts/TourSectionLayout";
import { TourSchemaType } from "../../schema/tourSchema";
import Accordion from "../Shared/Accordion/Accordion";

type TourFAQProps = {
  faq: TourSchemaType["faq"]
}

const TourFAQ = ({faq}: TourFAQProps) => {
  return (
    <TourSectionLayout title="FAQ">
            <Accordion type="single" className="-simple row y-gap-20 mt-30">
              {faq.map((item, index) => (
                <div className="col-12" key={index}>
                  <Accordion.Item key={index} index={index} className="accordion__item px-20 py-15 border-1 rounded-12">
               
                  <Accordion.Button className="d-flex items-center justify-between" isShowIcon={false}>
                    <div className="button text-16 text-dark-1">{item.question}</div>

                    <div className="accordion__icon size-30 flex-center bg-light-2 rounded-full">
                      <i className="icon-plus text-13"></i>
                      <i className="icon-minus text-13"></i>
                    </div>
                  </Accordion.Button>

                  <Accordion.Content index={index}>
                    <div className="pt-20">
                      <p>{item.answer}</p>
                    </div>
                  </Accordion.Content>
                </Accordion.Item>
                 </div>
              ))}
            </Accordion>
    </TourSectionLayout>
  );
};

export default TourFAQ;
