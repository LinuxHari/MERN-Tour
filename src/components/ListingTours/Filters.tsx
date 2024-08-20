import MobileFilters from "./MobileFilters";
import FiltersCard from "./FiltersCard";
import useWindowSize from "../../hooks/useWindowSize";

const Filters = () => {
  const {width} = useWindowSize()

  const isMobile = width < 992  
  
  return <>{isMobile ? <MobileFilters /> : <FiltersCard />}</>;
};

export default Filters;