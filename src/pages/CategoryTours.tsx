import SearchForm from "../components/Home/Hero/SearchForm";
import Filters from "../components/ListingTours/Filters";
import ListingHeader from "../components/ListingTours/ListingHeader";
import TourList from "../components/ListingTours/TourList";
import TourListHeader from "../components/ListingTours/TourListHeader";
import NoResult from "../components/Shared/NoResult/NoResult";
import Pagination from "../components/Shared/Pagination/Pagination";
import TourListingSkeleton from "../components/Skeletons/TourListingSkeleton";
import useToursByCategoryHandler from "../hooks/useToursByCategoryHandler";

const CategoryTours = () => {
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
    resetFilters,
    isFiltersApplied,
    category,
  } = useToursByCategoryHandler();

  return (
    <>
      {!isLoading ? (
        <>
          <div className="container px-4 mb-4 d-none d-lg-block" style={{marginTop: "100px"}}>
            <div className="border" style={{borderRadius: "10px"}}>
              <SearchForm />
            </div>
          </div>
          {!tours.length && !isFiltersApplied ? (
            <NoResult title="No tours found" description="Try searching different location" />
          ) : (
            <>
              <ListingHeader destination={category} />
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
                        resetFilters={resetFilters}
                      />
                    </div>
                    <div className="col-xl-9 col-lg-8">
                      {!isFetching ? (
                        !tours.length && isFiltersApplied ? (
                          <NoResult title="No tours found" description="Try changing filters" />
                        ) : (
                          <>
                            <TourListHeader totalCount={totalCount} sortType={sortType} setSortType={setSortType} />
                            <TourList tours={tours} onSelectTour={onSelectTour} />
                            <div className="d-flex justify-center flex-column mt-60">
                              <Pagination page={page} setPage={setPage} totalCount={totalCount} />
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
          )}
        </>
      ) : (
        <TourListingSkeleton />
      )}
    </>
  );
};

export default CategoryTours;
