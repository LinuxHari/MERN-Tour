import {useCallback, useEffect, useMemo, useRef} from "react";
import {createSearchParams, useNavigate, useParams, useSearchParams} from "react-router-dom";
import {listingUrlParamsHandler} from "../utils/urlParamsHandler";
import {useGetToursBySearchQuery} from "../redux/api/baseApi";
import {AppliedFiltersProps, Filters, SortTypes} from "../type";
import {reTransformUrlName, transformToUrlName} from "../utils/urlNameTransformer";
import {SearchSchemaType} from "../schema/searchSchema";
import useFilter from "./useFilter";

export type PaxType = {
  adults: number;
  children: number;
  teens: number;
  infants: number;
};

export type PriceRangeProps = {
  minPrice?: number;
  maxPrice?: number;
};

type ParamType = {
  destination: string;
  destinationId: string;
};

const useListingToursHandler = () => {
  const {destinationId, destination} = useParams() as ParamType;
  const [searchParams] = useSearchParams();
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

  const filterRef = useRef<number>(1);
  const navigate = useNavigate();

  // Initial values for filter hook
  const defaultSortType: SortTypes = "RCM";
  const defaultAppliedFilters: AppliedFiltersProps = {
    tourTypes: tourType === "All tours" ? undefined : [tourType],
    rating: 0,
  };
  const defaultPriceRange: PriceRangeProps = {
    minPrice: undefined,
    maxPrice: undefined,
  };
  const initialFilters: Filters = {
    rating: [
      {count: 5, label: "Outstanding(5)"},
      {count: 4, label: "Great(4)"},
      {count: 3, label: "Satisfactory(3)"},
      {count: 0, label: "Any"},
    ],
  };

  const {
    filters,
    setFilters,
    appliedFilters,
    priceRange,
    sortType,
    page,
    isFiltersApplied,
    handleSortType,
    handleAppliedFilters,
    handlePriceRange,
    handlePage,
    handleReset,
  } = useFilter(initialFilters, defaultAppliedFilters, defaultPriceRange, defaultSortType);

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
  const pax: PaxType = {
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

  const handleNavigation = useCallback(
    (id: string, tourName: string, destination: string, duration: number) => {
      const calculatedEndDate = new Date(new Date(startDate).setDate(new Date(startDate).getDate() + duration))
        .toISOString()
        .split("T")[0];

      const transformedName = transformToUrlName(tourName);
      const transformedDestination = transformToUrlName(destination);

      navigate({
        pathname: `/tours/${transformedDestination}/${transformedName}/${id}`,
        search: createSearchParams({
          startDate,
          endDate: String(calculatedEndDate),
          adults: String(adults),
          children: String(children),
          infants: String(infants),
          teens: String(teens),
        }).toString(),
      });
    },
    [navigate, startDate, adults, children, infants, teens],
  );

  useEffect(() => {
    if (data?.filters) {
      setFilters(data.filters);
      filterRef.current = 0;
    }
  }, [data]);

  useEffect(() => {
    handleAppliedFilters("tourTypes", tourType);
  }, [tourType]);

  useEffect(() => {
    filterRef.current = 1;
    handleReset();
  }, [destinationId]);

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
    isFiltersApplied,
    destination: transformedDestination,
    formData,
  };
};

export default useListingToursHandler;
