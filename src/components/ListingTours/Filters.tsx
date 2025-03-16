import useWindowSize from "../../hooks/useWindowSize";
import {AppliedFiltersProps, Filters as FiltersType} from "../../type";
import MobileFilters from "./MobileFilters";
import FiltersCard from "./FiltersCard";

type FilterProps = {
  filters: FiltersType;
  appliedFilters: AppliedFiltersProps;
  setAppliedFilters: (key: string, value: string) => void;
  setPriceRange: (minPrice: number, maxPrice?: number) => void;
  priceRange: {minPrice?: number; maxPrice?: number};
  resetFilters: () => void;
};

const Filters = (props: FilterProps) => {
  const {isMobile} = useWindowSize();

  return <>{isMobile ? <MobileFilters {...props} /> : <FiltersCard {...props} />}</>;
};

export default Filters;
