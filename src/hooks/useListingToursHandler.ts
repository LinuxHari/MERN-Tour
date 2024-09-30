import { useCallback, useEffect, useRef, useState } from "react";
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

  const filterRef = useRef(true)

  const [page, setPage] = useState(1);
  const [sortType, setSortType] = useState("Recommended");
  const [filters, setFilters] = useState<Filters>({
    rating: [
      { count: 5, label: "Outstanding(5)" },
      { count: 4, label: "Great(4)" },
      { count: 3, label: "Satisfactory(3)" },
    ],
  });
  const [appliedFilters, setAppliedFilters] = useState<AppliedFiltersProps>({ tourTypes: [tourType] });
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
    filters: filterRef.current,
    appliedFilters: { sortType, ...appliedFilters, ...priceRange },
  });

  const tours = data?.tours || [];
  const totalCount = data?.totalCount || 0;


  const handleSortType = useCallback((type: string) => setSortType(type), []);
  const handleAppliedFilters = useCallback((filterKey: string, value: string) => {
    const isArrFilter =  Array.isArray(filters[filterKey as keyof typeof filters]) && filterKey !== "rating"
    const currentFiltervalue = appliedFilters[filterKey as keyof typeof appliedFilters]
    const filterValue = isArrFilter? currentFiltervalue || []: currentFiltervalue 
    
    setAppliedFilters({ ...appliedFilters, [filterKey]: isArrFilter? [...filterValue as String[], value] : value });
  }, [filters, appliedFilters]);
  const handlePriceRange = useCallback(
    (minPrice: number, maxPrice: number) => setPriceRange({ minPrice, maxPrice }),
    []
  );
  const handlePage = useCallback((page: number) => setPage(page), []);

  useEffect(() => {
    if (data?.filters && filterRef.current) {
      setFilters({...filters, ...data.filters});
      filterRef.current = false
    };
  },[data])

  console.log(appliedFilters, "filters applied")

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
