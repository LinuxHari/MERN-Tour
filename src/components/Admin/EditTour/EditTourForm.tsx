import {useEffect, useLayoutEffect, useState} from "react";
import {FormProvider, useForm} from "react-hook-form";
import {zodResolver} from "@hookform/resolvers/zod";
import toast from "react-hot-toast";
import {EditTourSchema, EditTourSchemaType} from "../../../schema/tourSchema";
import Button from "../../Shared/Button/Button";
import StepNavigator from "../../Shared/Navigator/StepNavigator";
import useAdminTourHandler from "../../../hooks/Admin/useAdminTourHandler";
import {getFormErrorMessages} from "../../../utils/getFormErrorMessages";
import Tabs from "../../Shared/Tabs/Tabs";
import ContentSection from "../AddTour/ContentSection";
import ItinerarySection from "../AddTour/ItinerarySection";
import FAQSection from "../AddTour/FAQSection";
import IncludedSection from "../AddTour/IncludedSection";
import GallerySection from "../AddTour/GallerySection";
import LanguageSection from "../AddTour/LanguageSection";
import AvailabilitySection from "../AddTour/AvailabilitySection";

type EditTourSchemaProps = {
  tour: EditTourSchemaType;
  tourId: string;
};

const EditTourForm = ({tour, tourId}: EditTourSchemaProps) => {
  const formTabs = ["Content", "Itinerary", "FAQ", "Gallery", "Included", "Languages", "Availablility"];
  const formComponents = [
    <ContentSection key="content" isEditForm />,
    <ItinerarySection key="itinerary" />,
    <FAQSection key="faq" />,
    <GallerySection key="gallery" isEditForm />,
    <IncludedSection key="included" />,
    <LanguageSection key="languages" />,
    <AvailabilitySection key="availability" />,
  ];
  const lastIndex = formComponents.length - 1;

  const tabMap = {itinerary: 1, faq: 2, images: 3, included: 4, languages: 5};

  const [currentTab, setCurrentTab] = useState(0);
  const form = useForm<EditTourSchemaType>({
    defaultValues: tour,
    resolver: zodResolver(EditTourSchema),
    shouldFocusError: false,
  });
  const {
    handleSubmit,
    formState: {errors},
    setFocus,
    reset,
  } = form;
  const {updateTour, isUpdating} = useAdminTourHandler();

  useLayoutEffect(() => {
    const keys = Object.keys(errors);

    if (keys.length) {
      const {errorMessages, refs} = getFormErrorMessages(errors);

      toast.error(errorMessages[0]);
      setFocus(keys[0] as keyof EditTourSchemaType);
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

  useEffect(() => {
    reset(tour);
  }, [tour]);

  return (
    <FormProvider {...form}>
      <form encType="multipart/form-data" onSubmit={handleSubmit((data) => updateTour(data, tour, tourId, reset))}>
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
        <div className="d-flex gap-4 mt-40 justify-content-end col-9">
          <Button
            buttonType="secondary"
            type="button"
            isLoading={isUpdating}
            disabled={isUpdating}
            onClick={() => reset(tour)}
          >
            Reset
          </Button>
          <Button buttonType="primary" type="submit" isLoading={isUpdating} disabled={isUpdating}>
            Update tour
          </Button>
        </div>
      </form>
    </FormProvider>
  );
};

export default EditTourForm;
