import BreadCrumbs from "../components/Shared/BreadCrumbs/BreadCrumbs";
import TourHeader from "../components/SingleTour/TourHeader";
import TourInfo from "../components/SingleTour/TourInfo";
import TourSuggestions from "../components/SingleTour/TourSuggestions";

const SingleTour = () => {
  const tourData = {
    freeCancellation: true,
    isBestSeller: true,
    title: "Enchanting Paris: City of Lights Tour",
    rating: 4.8,
    reviewCount: 256,
    location: "Paris, France",
    totalBookings: 1345,
    images: [
      "img/tourSingle/1/1.png",
      "img/tourSingle/1/2.png",
      "img/tourSingle/1/3.png",
      "img/tourSingle/1/4.png",
    ],
  };

  return (
    <>
      <div className="container py-30 mt-80">
        <BreadCrumbs />
      </div>
      <TourHeader {...tourData} />
      <TourInfo />
      <TourSuggestions/>
    </>
  );
};

export default SingleTour;
