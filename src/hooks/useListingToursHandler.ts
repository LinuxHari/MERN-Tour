import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import { createSearchParams, useNavigate, useSearchParams } from "react-router-dom";
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
  const { destinationId, tourType, startDate, endDate, adults, children, infants, teens } =
    listingUrlParamsHandler({
      destinationId: urlParams.destinationId,
      tourType: urlParams.tourType,
      startDate: urlParams.startDate,
      endDate: urlParams.endDate,
      adults: urlParams.adults,
      children: urlParams.children,
      infants: urlParams.infants,
      teens: urlParams.teens
    });

  const filterRef = useRef(1);

  const navigate = useNavigate()

  const [page, setPage] = useState(1);
  const [sortType, setSortType] = useState("Recommended");
  const [filters, setFilters] = useState<Filters>({
    rating: [
      { count: 5, label: "Outstanding(5)" },
      { count: 4, label: "Great(4)" },
      { count: 3, label: "Satisfactory(3)" },
      { count: 0, label: "Any" },
    ],
  });
  const [appliedFilters, setAppliedFilters] = useState<AppliedFiltersProps>({ tourTypes: tourType === "All tours"? undefined: [tourType], rating: 0 });
  const [priceRange, setPriceRange] = useState<PriceRangeProps>({ minPrice: undefined, maxPrice: undefined });
  const queryParams = useMemo(() => ({
    destinationId,
    startDate,
    endDate,
    adults,
    children,
    infants,
    teens,
    page,
    filters: filterRef.current,
    appliedFilters: {
      sortType,
      ...appliedFilters,
      rating: appliedFilters.rating ? appliedFilters.rating : undefined,
      ...priceRange,
    },
  }), [destinationId, startDate, endDate, adults, children, infants, page, sortType, appliedFilters, priceRange]);
  
  const { data, isFetching, isLoading } = useGetToursBySearchQuery(queryParams);

  const tours = data?.tours || [];
  const totalCount = data?.totalCount || 0;
  const pax = {
    adults,
    teens,
    children,
    infants
  }

  const handleSortType = useCallback((type: string) => setSortType(type), []);

  const handleAppliedFilters = useCallback(
    (filterKey: string, value: string, isSelected?: boolean) => {
      const isArrFilter = Array.isArray(filters[filterKey as keyof typeof filters]) && filterKey !== "rating";
      const currentFiltervalue = appliedFilters[filterKey as keyof typeof appliedFilters];
      const filterValue = isArrFilter ? currentFiltervalue || [] : currentFiltervalue;

      if (typeof isSelected === "undefined")
        //check box filters does not pass selected param
        setAppliedFilters({ ...appliedFilters, [filterKey]: value });
      else if (isSelected)
        setAppliedFilters({ ...appliedFilters, [filterKey]: [...(filterValue as Array<string>), value] });
      else {
        if (isArrFilter) {
          let updatedFilter = appliedFilters[filterKey as keyof typeof appliedFilters] as Array<string>;
          updatedFilter = updatedFilter.filter((filterValue) => filterValue !== value);

         if(!updatedFilter.length){
          const updatedFilters = {...appliedFilters}
          delete updatedFilters[filterKey as keyof typeof updatedFilters]
          setAppliedFilters(updatedFilters)
         } else {
          setAppliedFilters({ ...appliedFilters, [filterKey]: updatedFilter });
         }
        }
      }
    },
    [filters, appliedFilters]
  );
  const handlePriceRange = useCallback(
    (minPrice: number, maxPrice?: number) => setPriceRange({ minPrice, maxPrice }),
    []
  );
  const handlePage = useCallback((page: number) => setPage(page), []);

  const handleNavigation = useCallback((id: string, duration: number) => {
    const endDate = new Date(new Date(startDate).setDate(new Date(startDate).getDate() + duration)).toISOString().split("T")[0]

    navigate({
      pathname: `/tours/${id}`,
      search: createSearchParams({
        startDate,
        endDate: String(endDate), 
        adults: String(adults),
        children: String(children),
        infants: String(infants),
        teens: String(teens)
      }).toString()
    })
  },[])

  useEffect(() => {
    if (data?.filters && filterRef.current) {
      setFilters({  ...data.filters, ...filters });
      filterRef.current = 0;
    }
  }, [data]);

  return {
    tours,
    totalCount,
    isLoading,
    isFetching,
    page,
    sortType,
    appliedFilters,
    priceRange,
    setSortType: handleSortType,
    setAppliedFilters: handleAppliedFilters,
    setPriceRange: handlePriceRange,
    setPage: handlePage,
    onSelectTour: handleNavigation,
    filters,
    pax,
    isFiltersApplied: Object.keys(appliedFilters).length > 2 || priceRange.maxPrice || priceRange.minPrice
  };
};

export default useListingToursHandler;
