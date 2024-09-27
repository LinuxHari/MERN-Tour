import MobileFilters from "./MobileFilters";
import FiltersCard from "./FiltersCard";
import useWindowSize from "../../hooks/useWindowSize";
import { FiltersProps } from "../../type";

const Filters = (props: FiltersProps) => {
  const {width} = useWindowSize()

  const isMobile = width < 992  
  
  return <>{isMobile ? <MobileFilters {...props}/> : <FiltersCard {...props}/>}</>;
};

export default Filters;
