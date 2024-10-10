import BreadCrumbs from "../components/Shared/BreadCrumbs/BreadCrumbs";
import TourHeader from "../components/SingleTour/TourHeader";
import TourInfo from "../components/SingleTour/TourInfo";
import TourSuggestions from "../components/SingleTour/TourSuggestions";
import useSingleTourHandler from "../hooks/useSingleTourHandler";

const SingleTour = () => {
  const { data, isLoading } = useSingleTourHandler();

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (!data) {
    return <div>Tour not available</div>;
  }

  return (
    <>
      <div className="container py-30 mt-80">
        <BreadCrumbs />
      </div>
      <TourHeader
        name={data.name}
        images={data.images}
        city={data.city}
        state={data.state}
        country={data.country}
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
      />
      <TourSuggestions />
    </>
  );
};

export default SingleTour;
