import {useCallback, useState} from "react";
import {AppliedFiltersProps, Filters, SortTypes} from "../type";

type PriceRangeProps = {
  minPrice?: number;
  maxPrice?: number;
};

const useFilter = (
  initialFilters: Filters,
  defaultAppliedFilters: AppliedFiltersProps,
  defaultPriceRange: PriceRangeProps,
  defaultSortType: SortTypes = "RCM",
) => {
  const [filters, setFilters] = useState<Filters>(initialFilters);
  const [appliedFilters, setAppliedFilters] = useState<AppliedFiltersProps>(defaultAppliedFilters);
  const [priceRange, setPriceRange] = useState<PriceRangeProps>(defaultPriceRange);
  const [sortType, setSortType] = useState<SortTypes>(defaultSortType);
  const [page, setPage] = useState<number>(1);

  const handleReset = useCallback(() => {
    setAppliedFilters(defaultAppliedFilters);
    setSortType(defaultSortType);
    setPage(1);
    setPriceRange(defaultPriceRange);
  }, [defaultAppliedFilters, defaultSortType, defaultPriceRange]);

  const handleSortType = useCallback((type: SortTypes) => setSortType(type), []);

  const handleAppliedFilters = useCallback(
    (filterKey: string, value: string, isSelected?: boolean) => {
      const isArrFilter = Array.isArray(filters[filterKey as keyof typeof filters]) && filterKey !== "rating";
      const currentFiltervalue = appliedFilters[filterKey as keyof typeof appliedFilters];
      const filterValue = isArrFilter ? currentFiltervalue || [] : currentFiltervalue;

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
          let updatedFilter = appliedFilters[filterKey as keyof typeof appliedFilters] as Array<string>;

          updatedFilter = updatedFilter.filter((filterValue) => filterValue !== value);

          if (!updatedFilter.length) {
            const updatedFilters = {...appliedFilters};

            delete updatedFilters[filterKey as keyof typeof updatedFilters];
            setAppliedFilters(updatedFilters);
          } else {
            setAppliedFilters({...appliedFilters, [filterKey]: updatedFilter});
          }
        }
      }

      if (page !== 1) setPage(1);
    },
    [filters, appliedFilters],
  );

  const handlePriceRange = useCallback(
    (minPrice: number, maxPrice?: number) => setPriceRange({minPrice, maxPrice}),
    [],
  );

  const handlePage = useCallback((newPage: number) => {
    setPage(newPage);
    setTimeout(() => window.scrollTo(0, 0), 500);
  }, []);

  const isFiltersApplied =
    Object.keys(appliedFilters).length > 2 ||
    appliedFilters.rating !== 0 ||
    priceRange.maxPrice !== undefined ||
    priceRange.minPrice !== undefined;

  return {
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
  };
};

export default useFilter;
