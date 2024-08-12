import Filters from "../components/ListingTours/Filters";
import ListingHeader from "../components/ListingTours/ListingHeader";
import TourList from "../components/ListingTours/TourList";
import TourListHeader from "../components/ListingTours/TourListHeader";

const ListingTours = () => {

  return (
    <>
      <ListingHeader />
      <section className="layout-pb-xl">
        <div className="container">
          <div className="row">
            <div className="col-xl-3 col-lg-4">
              <Filters />
            </div>
            <div className="col-xl-9 col-lg-8">
              <TourListHeader/>
              <TourList />
          </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ListingTours;
