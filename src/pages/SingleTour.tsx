import BreadCrumbs from "../components/Shared/BreadCrumbs/BreadCrumbs";
import SideCard from "../components/SingleTour/SideCard";
import TourHeader from "../components/SingleTour/TourHeader";
import TourOverview from "../components/SingleTour/TourOverview";
import TourServices from "../components/SingleTour/TourServices";

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
      <section className="layout-pt-md js-pin-container">
        <div className="container">
          <div className="row y-gap-30 justify-between">
            <div className="col-lg-8">
              <TourServices />
              <TourOverview />
            </div>
            <div className="col-lg-4">
              <SideCard />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default SingleTour;
