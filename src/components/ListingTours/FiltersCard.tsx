import {AppliedFiltersProps, Filters} from "../../type";
import Accordion from "../Shared/Accordion/Accordion";
import CheckboxRadioFilters from "./CheckboxRadioFilters";
import PriceFilter from "./PriceFilter";

type FilterProps = {
  filters: Filters;
  appliedFilters: AppliedFiltersProps;
  setAppliedFilters: (key: string, value: string) => void;
  setPriceRange: (minPrice: number, maxPrice?: number) => void;
  priceRange: {minPrice?: number; maxPrice?: number};
  resetFilters: () => void;
};

const FiltersCard = ({
  filters,
  appliedFilters,
  setAppliedFilters,
  priceRange,
  setPriceRange,
  resetFilters,
}: FilterProps) => {
  return (
    <div className="sidebar -type-1 rounded-12">
      <div className="sidebar__header bg-accent-1">
        <div className="text-20 text-white text-center fw-500">
          Explore with Ease
        </div>
        <div className="mt-10">
          <button
            className="-md py-2 w-100 rounded -outline-accent-1 text-accent-1 bg-white"
            type="button"
            onClick={resetFilters}
          >
            Reset
          </button>
        </div>
      </div>

      <Accordion
        type="multiple"
        className="-simple-2 sidebar__content d-flex flex-column"
        defaultOpen={[0, 1, 2, 3]}
      >
        {Object.entries(filters).map(([key, value], index) => (
          <div className={`order-${index === 0 ? index : index + 1}`} key={key}>
            <CheckboxRadioFilters
              title={key}
              filter={value}
              setAppliedFilters={setAppliedFilters}
              appliedFilterValue={
                appliedFilters[key as keyof typeof appliedFilters]
              }
              index={index}
            />
          </div>
        ))}
        <div className="order-1">
          <PriceFilter setPriceRange={setPriceRange} priceRange={priceRange} />
        </div>
      </Accordion>
    </div>
  );
};

export default FiltersCard;
