import { useCallback, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { listingUrlParamsHandler } from "../utils/urlParamsHandler";
import { useGetToursBySearchQuery } from "../redux/api/baseApi";
import { AppliedFiltersProps, Filters } from "../type";

type PriceRangeProps = {
  minPrice?: number;
  maxPrice?: number;
};

const useListingToursHandler = () => {
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

  const [page, setPage] = useState(1);
  const [sortType, setSortType] = useState("Recommended");
  const [filters, setFilters] = useState<Filters>({
    rating: [
      { count: 5, label: "Outstanding(5)" },
      { count: 4, label: "Great(4)" },
      { count: 3, label: "Satisfactory(3)" },
    ],
  });
  const [appliedFilters, setAppliedFilters] = useState<AppliedFiltersProps>({ tourType: [tourType] });
  const [priceRange, setPriceRange] = useState<PriceRangeProps>({ minPrice: undefined, maxPrice: undefined });
  const { data, isLoading } = useGetToursBySearchQuery({
    destination,
    destinationType,
    tourType,
    startDate,
    endDate,
    adults,
    children,
    infants,
    page,
    filters: filters ? false : true,
    appliedFilters: { sortType, ...appliedFilters, ...priceRange },
  });

  const tours = data?.tours || [];
  const totalCount = data?.totalCount || 0;

  if (data?.filters) {
    setFilters(data.filters);
  }

  console.log(appliedFilters, "filters applied");

  const handleSortType = useCallback((type: string) => setSortType(type), []);
  const handleAppliedFilters = useCallback((filterKey: string, value: string) => {
    const filterValue = appliedFilters[filterKey as keyof typeof appliedFilters] as any;
    console.log(filterValue)
    setAppliedFilters({ ...appliedFilters, [filterKey]: Array.isArray(filterKey) ? [...filterValue, value] : value });
  }, []);
  const handlePriceRange = useCallback(
    (minPrice: number, maxPrice: number) => setPriceRange({ minPrice, maxPrice }),
    []
  );
  const handlePage = useCallback((page: number) => setPage(page), []);

  return {
    tours,
    totalCount,
    isLoading,
    page,
    sortType,
    appliedFilters,
    setSortType: handleSortType,
    setAppliedFilters: handleAppliedFilters,
    setPriceRange: handlePriceRange,
    setPage: handlePage,
    filters,
  };
};

export default useListingToursHandler;
