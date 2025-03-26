import {useLayoutEffect, useState} from "react";
import {FormProvider, useForm} from "react-hook-form";
import {zodResolver} from "@hookform/resolvers/zod";
import toast from "react-hot-toast";
import {defaultTourValue, TourSchema, TourSchemaType} from "../../../schema/tourSchema";
import Button from "../../Shared/Button/Button";
import StepNavigator from "../../Shared/Navigator/StepNavigator";
import useTourSubmitHandler from "../../../hooks/Admin/useAdminTourHandler";
import {getFormErrorMessages} from "../../../utils/getFormErrorMessages";
import Tabs from "../../Shared/Tabs/Tabs";
import ContentForm from "./ContentSection";
import ItineraryForm from "./ItinerarySection";
import FAQForm from "./FAQSection";
import IncludedForm from "./IncludedSection";
import GallerySection from "./GallerySection";
import LanguageForm from "./LanguageSection";

const TourForm = () => {
  const formTabs = ["Content", "Itinerary", "FAQ", "Gallery", "Included", "Languages"];
  const formComponents = [
    <ContentForm key="content" />,
    <ItineraryForm key="itinerary" />,
    <FAQForm key="faq" />,
    <GallerySection key="gallery" />,
    <IncludedForm key="included" />,
    <LanguageForm key="languages" />,
  ];
  const lastIndex = formComponents.length - 1;

  const tabMap = {itinerary: 1, faq: 2, images: 3, included: 4, languages: 5};

  const [currentTab, setCurrentTab] = useState(0);
  const form = useForm<TourSchemaType>({
    defaultValues: defaultTourValue,
    resolver: zodResolver(TourSchema),
    shouldFocusError: false,
  });
  const {
    handleSubmit,
    formState: {errors},
    setFocus,
    reset,
  } = form;
  const {tourSubmitHandler, isLoading} = useTourSubmitHandler();

  useLayoutEffect(() => {
    const keys = Object.keys(errors);

    if (keys.length) {
      const {errorMessages, refs} = getFormErrorMessages(errors);

      toast.error(errorMessages[0]);
      setFocus(keys[0] as keyof TourSchemaType);
      const tabToSet = tabMap[keys[0] as keyof typeof tabMap];

      if (tabToSet) {
        setCurrentTab(tabToSet);
      } else {
        setCurrentTab(0);
      }

      setTimeout(() => {
        const firstRef = refs[0];

        if (firstRef?.focus) {
          const elementPosition = firstRef.getBoundingClientRect().top + window.scrollY;
          const offsetPosition = elementPosition - 50;

          window.scrollTo({top: offsetPosition, behavior: "smooth"});
          firstRef.focus();
        }
      }, 100);
    }
  }, [errors]);

  return (
    <FormProvider {...form}>
      <form encType="multipart/form-data" onSubmit={handleSubmit((data) => tourSubmitHandler(data, reset))}>
        <div className="row y-gap-30 rounded-12 bg-white shadow-2 px-20 pt-40 pb-30 mt-60">
          <Tabs
            className="-underline-2"
            defaultIndex={currentTab}
            onTabChange={(index: number) => setCurrentTab(index)}
          >
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
        </div>
        <div className="d-flex gap-4 mt-40">
          <Button
            buttonType="secondary"
            type="button"
            showIcon={false}
            isLoading={isLoading}
            disabled={isLoading}
            onClick={() => reset()}
          >
            Reset
          </Button>

          <Button buttonType="primary" type="submit" isLoading={isLoading} disabled={isLoading}>
            Add tour
          </Button>
        </div>
      </form>
    </FormProvider>
  );
};

export default TourForm;
