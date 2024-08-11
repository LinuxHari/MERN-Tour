import Filters from "../components/ListingTours/Filters";
import ListingHeader from "../components/ListingTours/ListingHeader";
import TourList from "../components/ListingTours/TourList";

const ListingTours = () => {
  return (
    <>
        <ListingHeader/>
    <section className="layout-pb-xl">
      <div className="container">
        <div className="row">
            <div className="col-xl-3 col-lg-4"><Filters /></div>
          
          <TourList />
        </div>
      </div>
    </section>
    </>
  );
};

export default ListingTours;
