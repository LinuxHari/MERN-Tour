// import DatePicker from "../Shared/DatePicker/DatePicker";
import { AppliedFiltersProps, Filters } from "../../type";
import CheckboxRadioFilters from "./CheckboxRadioFilters";
import PriceFilter from "./PriceFilter";

type FilterProps = {
  filters: Filters;
  appliedFilters: AppliedFiltersProps;
  setAppliedFilters: (key: string, value: string) => void;
  setPriceRange: (minPrice: number, maxPrice: number) => void;
  priceRange: {minPrice?: number, maxPrice?: number }
};

const FiltersCard = ({ filters, appliedFilters, setAppliedFilters, priceRange, setPriceRange }: FilterProps) => {
  // const filterGroup = {
  //   "Tour Type": [
  //    ...categories
  //   ],
  //   Duration: ["2 days", "3 days", "5 days", "7 days", "More than 7 days"],
  //   Language: ["English", "Dutch", "German", "French", "Italian"],
  //   Rating: ["Outstanding (5)", "Great (4)", "Satisfactory  (3)"],
  //   Specials: [
  //     "Deals & Discounts",
  //     "Free Cancellation",
  //     "Likely to Sell Out",
  //     "Skip-The-Line",
  //     "Private Tour",
  //   ],
  // };

  return (
    <div className="sidebar -type-1 rounded-12">
      <div className="sidebar__header bg-accent-1">
        <div className="text-20 text-white fw-500">Refine your search</div>
        <div className="mt-10">{/* <DatePicker /> */}</div>
      </div>

      <div className="sidebar__content d-flex flex-column">
        {Object.entries(filters).map(([key, value], index) => (
          <div className={`order-${index === 0 ? index : index + 1}`} key={key}>
            <CheckboxRadioFilters
              title={key}
              filter={value}
              setAppliedFilters={setAppliedFilters}
              appliedFilterValue={appliedFilters[key as keyof typeof appliedFilters]}
            />
          </div>
        ))}
        <div className="order-1">
          <PriceFilter setPriceRange={setPriceRange} priceRange={priceRange}/>
        </div>
      </div>
    </div>
  );
};

export default FiltersCard;
