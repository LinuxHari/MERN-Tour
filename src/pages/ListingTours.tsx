import Filters from "../components/ListingTours/Filters";
import ListingHeader from "../components/ListingTours/ListingHeader";
import TourList from "../components/ListingTours/TourList";
import TourListHeader from "../components/ListingTours/TourListHeader";
import Pagination from "../components/Shared/Pagination/Pagination";
import useListingToursHandler from "../hooks/useListingToursHandler";

const ListingTours = () => {
  const { isLoading, isFetching, tours, totalCount, setSortType, setAppliedFilters, setPage, setPriceRange, priceRange, sortType, page, appliedFilters, filters, onSelectTour, pax, isFiltersApplied } = useListingToursHandler();
  return (
    <>
      {!isLoading ? 
        !Boolean(tours.length)? <p>No tours found.</p>: <>
        <ListingHeader />
        <section className="layout-pb-xl">
          <div className="container">
            <div className="row">
              <div className="col-xl-3 col-lg-4">
                <Filters
                  filters={filters}
                  appliedFilters={appliedFilters}
                  setAppliedFilters={setAppliedFilters}
                  priceRange={priceRange}
                  setPriceRange={setPriceRange}
                />
              </div>
              <div className="col-xl-9 col-lg-8">
                {
                  !isFetching? 
                  !Boolean(tours.length) && isFiltersApplied? <>
                  <TourListHeader totalCount={totalCount} sortType={sortType} setSortType={setSortType} />
                     <TourList tours={tours} onSelectTour={onSelectTour} pax={pax}/>
                  <div className="d-flex justify-center flex-column mt-60">
                    <Pagination page={page} setPage={setPage} totalCount={totalCount} />
                  </div>
                  </>: <div><p>No Tours found, try changing filters.</p></div>: <div>Loading...</div>
                }
              </div>
            </div>
          </div>
        </section>
      </>: (
        <div style={{ minHeight: "100vh" }}>"Loading..."</div>
      )}
    </>
  );
};

export default ListingTours;
