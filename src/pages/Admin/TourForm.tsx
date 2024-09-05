import Tabs from "../../components/Shared/Tabs/Tabs";
import ContentForm from "../../components/Admin/AddTour/ContentSection";
import ItineraryForm from "../../components/Admin/AddTour/ItinerarySection";
import FAQForm from "../../components/Admin/AddTour/FAQSection";
import IncludedForm from "../../components/Admin/AddTour/IncludedSection";
import { FormProvider, useForm } from "react-hook-form";
import { defaultTourValue, TourSchema, TourSchemaType } from "../../schema/tourSchema";
import { zodResolver } from "@hookform/resolvers/zod";
import Button from "../../components/Shared/Button/Button";
import LanguageForm from "../../components/Admin/AddTour/LanguageSection";
import { useState } from "react";
import StepNavigator from "../../components/Shared/Navigator/StepNavigator";

const TourForm = () => {
  const formTabs = ["Content", "Itinerary", "FAQ", "Included", "Languages"];
  const formComponents = [<ContentForm />, <ItineraryForm />, <FAQForm />, <IncludedForm />, <LanguageForm />];
  const lastIndex = formComponents.length - 1;

  const [currentTab, setCurrentTab] = useState(0);

  const form = useForm<TourSchemaType>({ defaultValues: defaultTourValue, resolver: zodResolver(TourSchema) });

  const {
    handleSubmit,
    formState: { errors },
  } = form;

  console.log(errors, "errors");
  

  const addTour = (data: TourSchemaType) => {
    console.log(data, "submitted data");
  };

  return (
    <FormProvider {...form}>
      <form
        className="row y-gap-30 rounded-12 bg-white shadow-2 px-40 pt-40 pb-30 mt-60"
        encType="multipart/form-data"
        onSubmit={handleSubmit(addTour)}
      >
        <Tabs className="-underline-2" defaultIndex={currentTab} onTabChange={(index: number) => setCurrentTab(index)}>
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
                  <Tabs.TabContent className={`-tab-item-${index + 1}`} index={index} key={index}>
                    {Component}
                  </Tabs.TabContent>
                ))}
              </Tabs.TabContents>
            </div>
          </div>
        </Tabs>
        <StepNavigator
          lastIndex={lastIndex}
          activeTab={currentTab}
          nextClick={() => setCurrentTab(currentTab + 1)}
          prevClick={() => setCurrentTab(currentTab - 1)}
        />
        {currentTab === lastIndex && (
          <div className="col-12">
            <Button buttonType="primary" type="submit">
              Add tour
            </Button>
          </div>
        )}
      </form>
    </FormProvider>
  );
};

export default TourForm;
