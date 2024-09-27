import { useSearchParams } from "react-router-dom";
import Filters from "../components/ListingTours/Filters";
import ListingHeader from "../components/ListingTours/ListingHeader";
import TourList from "../components/ListingTours/TourList";
import TourListHeader from "../components/ListingTours/TourListHeader";
import { listingUrlParamsHandler } from "../utils/urlParamsHandler";
import { useGetToursBySearchQuery } from "../redux/api/baseApi";

const ListingTours = () => {
  const [searchParams, _] = useSearchParams();
  const urlParams = Object.fromEntries(searchParams);
  const { destination, destinationType, tourType, startDate, endDate, adults, children, infants } =
    listingUrlParamsHandler({
      destination: urlParams.destination,
      destinationType: urlParams.destinationType,
      tourType: urlParams.tourType,
      startDate: urlParams.startDate,
      endDate: urlParams.endDate,
      adults: urlParams.adults,
      children: urlParams.children,
      infants: urlParams.infants,
    });

  const { data, isLoading } = useGetToursBySearchQuery({
    destination,
    destinationType,
    tourType,
    startDate,
    endDate,
    adults,
    children,
    infants,
    page: 1,
  });

  const tours = data?.tours || [] 
  const totalCount = data?.totalCount || 0
  const minPrice = data?.minPrice || 0
  const maxPrice = data?.maxPrice || 100000

  return (
    <>
      {!isLoading ? (
        <>
          <ListingHeader />
          <section className="layout-pb-xl">
            <div className="container">
              <div className="row">
                <div className="col-xl-3 col-lg-4">
                  <Filters minPrice={minPrice} maxPrice={maxPrice} />
                </div>
                <div className="col-xl-9 col-lg-8">
                  <TourListHeader totalCount={totalCount} />
                  <TourList tours = {tours}/>
                </div>
              </div>
            </div>
          </section>
        </>
      ) : (
        <div style={{minHeight: "100vh"}}>
          "Loading..."
        </div>
      )}
    </>
  );
};

export default ListingTours;
