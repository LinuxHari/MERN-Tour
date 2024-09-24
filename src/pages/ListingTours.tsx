import { useSearchParams } from "react-router-dom";
import Filters from "../components/ListingTours/Filters";
import ListingHeader from "../components/ListingTours/ListingHeader";
import TourList from "../components/ListingTours/TourList";
import TourListHeader from "../components/ListingTours/TourListHeader";
import { listingUrlParamsHandler } from "../utils/urlParamsHandler";

const ListingTours = () => {
  const [searchParams, _] = useSearchParams();
  const urlParams = Object.fromEntries(searchParams);
  const {destination, destinationType, tourType, startDate, endDate, adults, children, infants} = listingUrlParamsHandler({
    destination: urlParams.destination,
    destinationType: urlParams.destinationType,
    tourType: urlParams.tourType,
    startDate: urlParams.startDate,
    endDate: urlParams.endDate,
    adults: urlParams.adults,
    children: urlParams.children,
    infants: urlParams.infants
  });

  console.log(destination, destinationType, tourType, startDate, endDate, adults, children, infants)

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
              <TourListHeader />
              <TourList />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ListingTours;
