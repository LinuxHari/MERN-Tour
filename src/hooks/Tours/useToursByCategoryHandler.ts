import {useNavigate, useParams} from "react-router-dom";
import {useCallback, useEffect, useMemo, useRef} from "react";
import {AppliedFiltersProps, Filters, SortTypes} from "../../type";
import {useGetToursByCategoryQuery} from "../../redux/api/baseApi";
import {transformToUrlName} from "../../utils/urlNameTransformer";
import {validateCategory} from "../../utils/urlParamsHandler";
import {TOUR_TYPES} from "../../config/tourConfig";
import {RATINGS} from "../../data";
import useFilter from "./useFilter";
import {PriceRangeProps} from "./useListingToursHandler";

type ParamsType = {
  category: string;
};

const useToursByCategoryHandler = () => {
  const {category} = useParams() as ParamsType;
  const validatedCategory = validateCategory(category, TOUR_TYPES[0]);
  const filterRef = useRef<number>(1);
  const navigate = useNavigate();

  const defaultSortType: SortTypes = "RCM";
  const defaultAppliedFilters: AppliedFiltersProps = {
    rating: 0,
  };
  const defaultPriceRange: PriceRangeProps = {
    minPrice: undefined,
    maxPrice: undefined,
  };
  const initialFilters: Filters = {
    rating: RATINGS,
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
      page,
      filters: filterRef.current,
      appliedFilters: {
        sortType: sortType !== defaultSortType ? sortType : undefined,
        ...appliedFilters,
        rating: appliedFilters.rating ? appliedFilters.rating : undefined,
        ...priceRange,
        tourTypes: [validatedCategory],
      },
    }),
    [page, sortType, appliedFilters, priceRange],
  );

  const {data, isFetching, isLoading} = useGetToursByCategoryQuery(queryParams);

  const tours = data?.tours || [];
  const totalCount = data?.totalCount || 0;

  const handleNavigation = useCallback((id: string, tourName: string, destination: string) => {
    const transformedName = transformToUrlName(tourName);
    const transformedDestination = transformToUrlName(destination);

    navigate({
      pathname: `/tours/${transformedDestination}/${transformedName}/${id}`,
    });
  }, []);

  useEffect(() => {
    if (data?.filters) {
      setFilters({...data.filters, ...initialFilters});
      filterRef.current = 0;
    }
  }, [data]);

  useEffect(() => {
    filterRef.current = 1;
    handleReset();
  }, [category]);

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
    isFiltersApplied,
    category: validatedCategory,
  };
};

export default useToursByCategoryHandler;
