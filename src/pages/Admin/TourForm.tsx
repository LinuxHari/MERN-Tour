import {useLayoutEffect, useState} from "react";
import {FormProvider, useForm} from "react-hook-form";
import {zodResolver} from "@hookform/resolvers/zod";
import toast from "react-hot-toast";
import Tabs from "../../components/Shared/Tabs/Tabs";
import ContentForm from "../../components/Admin/AddTour/ContentSection";
import ItineraryForm from "../../components/Admin/AddTour/ItinerarySection";
import FAQForm from "../../components/Admin/AddTour/FAQSection";
import IncludedForm from "../../components/Admin/AddTour/IncludedSection";
import {defaultTourValue, TourSchema, TourSchemaType} from "../../schema/tourSchema";
import Button from "../../components/Shared/Button/Button";
import LanguageForm from "../../components/Admin/AddTour/LanguageSection";
import StepNavigator from "../../components/Shared/Navigator/StepNavigator";
import useTourSubmitHandler from "../../hooks/useAdminTourHandler";
import {getFormErrorMessages} from "../../utils/getFormErrorMessages";
import GallerySection from "../../components/Admin/AddTour/GallerySection";

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
  const [showSubmit, setShowSubmit] = useState(false);
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
  const showSubmitBtn = currentTab === lastIndex || showSubmit;

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

      if (!showSubmit) setShowSubmit(true);

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
      <form
        className="row y-gap-30 rounded-12 bg-white shadow-2 px-40 pt-40 pb-30 mt-60"
        encType="multipart/form-data"
        onSubmit={handleSubmit((data) => tourSubmitHandler(data, reset))}
      >
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
        {showSubmitBtn && (
          <div className="col-12 mt-40">
            <Button buttonType="primary" type="submit" isLoading={isLoading} disabled={isLoading}>
              Add tour
            </Button>
          </div>
        )}
      </form>
    </FormProvider>
  );
};

export default TourForm;
