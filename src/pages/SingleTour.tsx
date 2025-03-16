import BreadCrumbs from "../components/Shared/BreadCrumbs/BreadCrumbs";
import NoResult from "../components/Shared/NoResult/NoResult";
import TourHeader from "../components/SingleTour/TourHeader";
import TourInfo from "../components/SingleTour/TourInfo";
import TourSuggestions from "../components/SingleTour/TourSuggestions";
import TourDetailSkeleton from "../components/Skeletons/TourDetailSkeleton";
import useSingleTourHandler from "../hooks/useSingleTourHandler";

const SingleTour = () => {
  const {data, isLoading, pax, startDate, endDate, tourId} = useSingleTourHandler();

  if (isLoading) {
    return <TourDetailSkeleton />;
  }

  if (!data) return <NoResult title="Tour is not available" description="Choose different tour" showGoBack />;

  return (
    <>
      <div className="container py-30 mt-80">
        <BreadCrumbs destination={data.destination.split(",")[0]} />
      </div>
      <TourHeader
        name={data.name}
        images={data.images}
        destination={data.destination}
        freeCancellation={data.freeCancellation}
        description={data.description}
      />
      <TourInfo
        duration={data.duration}
        minAge={data.minAge}
        capacity={data.capacity}
        languages={data.languages}
        faq={data.faq}
        itinerary={data.itinerary}
        description={data.description}
        highlights={data.highlights}
        included={data.included}
        pax={pax}
        price={data.price}
        startDate={startDate}
        endDate={endDate}
        tourId={tourId}
        canReview={data.canReview}
      />
      <TourSuggestions />
    </>
  );
};

export default SingleTour;
