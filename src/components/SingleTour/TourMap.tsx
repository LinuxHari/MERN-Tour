import TourSectionLayout from "../../layouts/TourSectionLayout";

const TourMap = () => {
  return (
    <TourSectionLayout title="Tour Map">
      <div className="mapTourSingle mt-30 mb-30">
        <div className="map__content rounded-12 js-map-tour" />
      </div>
    </TourSectionLayout>
  );
};

export default TourMap;
