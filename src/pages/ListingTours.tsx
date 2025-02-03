import Filters from "../components/ListingTours/Filters";
import ListingHeader from "../components/ListingTours/ListingHeader";
import TourList from "../components/ListingTours/TourList";
import TourListHeader from "../components/ListingTours/TourListHeader";
import Pagination from "../components/Shared/Pagination/Pagination";
import TourListingSkeleton from "../components/Skeletons/TourListingSkeleton";
import useListingToursHandler from "../hooks/useListingToursHandler";

const ListingTours = () => {
  const {
    isLoading,
    isFetching,
    tours,
    totalCount,
    setSortType,
    setAppliedFilters,
    setPage,
    setPriceRange,
    priceRange,
    sortType,
    page,
    appliedFilters,
    filters,
    onSelectTour,
    pax,
    isFiltersApplied,
  } = useListingToursHandler();

  return (
    <>
      {!isLoading ? (
        !tours.length && !isFiltersApplied ? (
          <p style={{minHeight: "100vh", margin: "200px"}}>No tours found.</p>
        ) : (
          <>
            <ListingHeader destination={tours[0].destination.split(",")[0]} />
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
                    {!isFetching ? (
                      !tours.length && isFiltersApplied ? (
                        <div>
                          <p>No Tours found, try changing filters.</p>
                        </div>
                      ) : (
                        <>
                          <TourListHeader
                            totalCount={totalCount}
                            sortType={sortType}
                            setSortType={setSortType}
                          />
                          <TourList
                            tours={tours}
                            onSelectTour={onSelectTour}
                            pax={pax}
                          />
                          <div className="d-flex justify-center flex-column mt-60">
                            <Pagination
                              page={page}
                              setPage={setPage}
                              totalCount={totalCount}
                            />
                          </div>
                        </>
                      )
                    ) : (
                      <TourListingSkeleton />
                    )}
                  </div>
                </div>
              </div>
            </section>
          </>
        )
      ) : (
        <TourListingSkeleton />
      )}
    </>
  );
};

export default ListingTours;
