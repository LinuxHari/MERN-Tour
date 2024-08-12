import Pagination from "../shared/Pagination/Pagination";
import TourCard2 from "../shared/TourCard/TourCard2";

const TourList = () => {
  return (
    <>
      <div className="row y-gap-30 pt-30">
        <div className="col-12">
          <TourCard2 />
        </div>
        <div className="col-12">
          <TourCard2 />
        </div>
        <div className="col-12">
          <TourCard2 />
        </div>
      </div>

      <div className="d-flex justify-center flex-column mt-60">
        <Pagination />
      </div>
    </>
  );
};

export default TourList;
