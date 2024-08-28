import Tabs from "../../components/Shared/Tabs/Tabs";
import ContentForm from "../../components/Admin/AddTour/ContentSection";
import ItineraryForm from "../../components/Admin/AddTour/ItinerarySection";
import FAQForm from "../../components/Admin/AddTour/FAQSection";
import IncludedForm from "../../components/Admin/AddTour/IncludedSection";
import { FormProvider, useForm } from "react-hook-form";
import { TourSchema, TourSchemaType} from "../../schema/tourSchema";
import { zodResolver } from "@hookform/resolvers/zod";
import Button from "../../components/Shared/Button/Button";

const TourForm = () => {
  const formTabs = ["Content", "Itinerary", "FAQ", "Included"];
  const formComponents = [<ContentForm />,<ItineraryForm />,<FAQForm />,<IncludedForm />];

  const form = useForm<TourSchemaType>({ resolver: zodResolver(TourSchema) });

  return (
    <FormProvider {...form}>
      <form className="rounded-12 bg-white shadow-2 px-40 pt-40 pb-30 mt-60">
        <Tabs className="-underline-2">
          <Tabs.TabList className="row x-gap-40 y-gap-10 lg:x-gap-20 js-tabs-controls">
            {formTabs.map((tab, index) => (
              <div className="col-auto" key={index}>
                <Tabs.Tab
                  className="text-20 lh-12 fw-500 pb-15 lg:pb-0"
                  data-tab-target={`.-tab-item-${index + 1}`}
                  index={index}
                >
                  {index + 1}. {tab}
                </Tabs.Tab>
              </div>
            ))}
          </Tabs.TabList>

          <div className="row pt-40">
            <div className="col-xl-9 col-lg-10">
              <Tabs.TabContents>
                {formComponents.map((Component, index) => (
                  <Tabs.TabContent
                    className={`-tab-item-${index + 1}`}
                    index={index}
                    key={index}
                  >
                    {Component}
                  </Tabs.TabContent>
                ))}
              </Tabs.TabContents>
            </div>
          </div>
        </Tabs>
        <div className="col-12 mt-30">
        <Button buttonType="primary" type="submit">Save Changes</Button>
      </div>
      </form>
    </FormProvider>
  );
};

export default TourForm;
