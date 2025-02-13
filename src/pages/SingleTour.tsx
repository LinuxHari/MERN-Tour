import BreadCrumbs from "../components/Shared/BreadCrumbs/BreadCrumbs";
import TourHeader from "../components/SingleTour/TourHeader";
import TourInfo from "../components/SingleTour/TourInfo";
import TourDetailSkeleton from "../components/Skeletons/TourDetailSkeleton";
import useSingleTourHandler from "../hooks/useSingleTourHandler";

const SingleTour = () => {
  const {data, isLoading, pax, startDate, endDate, tourId} =
    useSingleTourHandler();

  if (isLoading) {
    return <TourDetailSkeleton />;
  }

  if (!data) {
    return <div>Tour not available</div>;
  }

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
      />
      {/* <TourSuggestions /> */}
    </>
  );
};

export default SingleTour;
