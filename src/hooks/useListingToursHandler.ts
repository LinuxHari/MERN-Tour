import {useCallback, useEffect, useMemo, useRef, useState} from "react";
import {
  createSearchParams,
  useNavigate,
  useParams,
  useSearchParams,
} from "react-router-dom";
import {listingUrlParamsHandler} from "../utils/urlParamsHandler";
import {useGetToursBySearchQuery} from "../redux/api/baseApi";
import {AppliedFiltersProps, Filters, SortTypes} from "../type";
import {
  reTransformUrlName,
  transformToUrlName,
} from "../utils/urlNameTransformer";
import {SearchSchemaType} from "../schema/searchSchema";

type PriceRangeProps = {
  minPrice?: number;
  maxPrice?: number;
};

type ParamType = {
  destination: string;
  destinationId: string;
};

const useListingToursHandler = () => {
  const {destinationId, destination} = useParams() as ParamType;
  const [searchParams, _] = useSearchParams();
  const urlParams = Object.fromEntries(searchParams);
  const {
    tourType,
    startDate,
    endDate,
    adults,
    children,
    infants,
    teens,
    destination: selectedDestination,
    destinationId: selectedDestinationId,
  } = listingUrlParamsHandler({
    tourType: urlParams.tourType,
    startDate: urlParams.startDate,
    endDate: urlParams.endDate,
    adults: urlParams.adults,
    children: urlParams.children,
    infants: urlParams.infants,
    teens: urlParams.teens,
    destinationId,
    destination,
  });

  const filterRef = useRef(1);

  const navigate = useNavigate();

  const defaultSortType = "RCM";
  const defaultAppliedFilters = {
    tourTypes: tourType === "All tours" ? undefined : [tourType],
    rating: 0,
  };
  const defaultPriceRange = {
    minPrice: undefined,
    maxPrice: undefined,
  };

  const [page, setPage] = useState(1);
  const [sortType, setSortType] = useState<SortTypes>(defaultSortType);
  const [filters, setFilters] = useState<Filters>({
    rating: [
      {count: 5, label: "Outstanding(5)"},
      {count: 4, label: "Great(4)"},
      {count: 3, label: "Satisfactory(3)"},
      {count: 0, label: "Any"},
    ],
  });
  const [appliedFilters, setAppliedFilters] = useState<AppliedFiltersProps>(
    defaultAppliedFilters,
  );
  const [priceRange, setPriceRange] =
    useState<PriceRangeProps>(defaultPriceRange);
  const queryParams = useMemo(
    () => ({
      destinationId: selectedDestinationId,
      startDate,
      endDate,
      adults,
      children,
      infants,
      teens,
      page,
      filters: filterRef.current,
      appliedFilters: {
        sortType: sortType !== defaultSortType ? sortType : undefined,
        ...appliedFilters,
        rating: appliedFilters.rating ? appliedFilters.rating : undefined,
        ...priceRange,
      },
    }),
    [
      selectedDestinationId,
      startDate,
      endDate,
      adults,
      children,
      infants,
      teens,
      page,
      sortType,
      appliedFilters,
      priceRange,
    ],
  );

  const {data, isFetching, isLoading} = useGetToursBySearchQuery(queryParams);

  const tours = data?.tours || [];
  const totalCount = data?.totalCount || 0;
  const pax = {
    adults,
    teens,
    children,
    infants,
  };
  const transformedDestination = reTransformUrlName(selectedDestination);

  const formData: SearchSchemaType = {
    destination: transformedDestination,
    destinationId: selectedDestinationId,
    tourType: tourType as SearchSchemaType["tourType"],
    dateRange: {
      startDate: new Date(startDate),
      endDate: new Date(endDate),
    },
    pax,
  };

  const handleReset = useCallback(() => {
    setAppliedFilters(defaultAppliedFilters);
    setSortType(defaultSortType);
    setPage(1);
    setPriceRange(defaultPriceRange);
  }, []);

  const handleSortType = useCallback(
    (type: SortTypes) => setSortType(type),
    [],
  );

  const handleAppliedFilters = useCallback(
    (filterKey: string, value: string, isSelected?: boolean) => {
      const isArrFilter =
        Array.isArray(filters[filterKey as keyof typeof filters]) &&
        filterKey !== "rating";
      const currentFiltervalue =
        appliedFilters[filterKey as keyof typeof appliedFilters];
      const filterValue = isArrFilter
        ? currentFiltervalue || []
        : currentFiltervalue;

      if (typeof isSelected === "undefined")
        //check box filters does not pass selected param
        setAppliedFilters({...appliedFilters, [filterKey]: value});
      else if (isSelected)
        setAppliedFilters({
          ...appliedFilters,
          [filterKey]: [...(filterValue as Array<string>), value],
        });
      else {
        if (isArrFilter) {
          let updatedFilter = appliedFilters[
            filterKey as keyof typeof appliedFilters
          ] as Array<string>;

          updatedFilter = updatedFilter.filter(
            (filterValue) => filterValue !== value,
          );

          if (!updatedFilter.length) {
            const updatedFilters = {...appliedFilters};

            delete updatedFilters[filterKey as keyof typeof updatedFilters];
            setAppliedFilters(updatedFilters);
          } else {
            setAppliedFilters({...appliedFilters, [filterKey]: updatedFilter});
          }
        }
      }
    },
    [filters, appliedFilters],
  );
  const handlePriceRange = useCallback(
    (minPrice: number, maxPrice?: number) =>
      setPriceRange({minPrice, maxPrice}),
    [],
  );
  const handlePage = useCallback((page: number) => setPage(page), []);

  const handleNavigation = useCallback(
    (id: string, tourName: string, destination: string, duration: number) => {
      const endDate = new Date(
        new Date(startDate).setDate(new Date(startDate).getDate() + duration),
      )
        .toISOString()
        .split("T")[0];

      const transformedName = transformToUrlName(tourName);

      const transformedDestination = transformToUrlName(destination);

      navigate({
        pathname: `/tours/${transformedDestination}/${transformedName}/${id}`,
        search: createSearchParams({
          startDate,
          endDate: String(endDate),
          adults: String(adults),
          children: String(children),
          infants: String(infants),
          teens: String(teens),
        }).toString(),
      });
    },
    [],
  );

  useEffect(() => {
    if (data?.filters && filterRef.current) {
      setFilters({...data.filters, ...filters});
      filterRef.current = 0;
    }
  }, [data]);

  useEffect(() => {
    setAppliedFilters((prev) => ({
      ...prev,
      tourTypes: tourType === "All tours" ? undefined : [tourType],
    }));
  }, [tourType]);

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
    resetFilters: handleReset,
    filters,
    pax,
    isFiltersApplied:
      Object.keys(appliedFilters).length > 2 ||
      appliedFilters.rating !== 0 ||
      priceRange.maxPrice ||
      priceRange.minPrice,
    destination: transformedDestination,
    formData,
  };
};

export default useListingToursHandler;
