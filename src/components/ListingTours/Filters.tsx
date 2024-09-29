import MobileFilters from "./MobileFilters";
import FiltersCard from "./FiltersCard";
import useWindowSize from "../../hooks/useWindowSize";
import { AppliedFiltersProps, Filters as FiltersType } from "../../type";

type FilterProps = {
  filters: FiltersType
  appliedFilters: AppliedFiltersProps
  setAppliedFilters: (key: string, value: string) => void
  setPriceRange: (minPrice:number, maxPrice: number) => void
}

const Filters = (props: FilterProps) => {
  const {width} = useWindowSize()

  const isMobile = width < 992  
  
  return <>{isMobile ? <MobileFilters {...props}/> : <FiltersCard {...props}/>}</>;
};

export default Filters;
