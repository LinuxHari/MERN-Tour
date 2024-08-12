import DatePicker from "../shared/DatePicker/DatePicker";
import CheckboxFilter from "./CheckboxFilter";
import PriceFilter from "./PriceFilter";

const Filters = () => {
  return (
    <div className="sidebar -type-1 rounded-12">
      <div className="sidebar__header bg-accent-1">
        <div className="text-15 text-white fw-500">When are you traveling?</div>

        <div className="mt-10">
          <DatePicker />
        </div>
      </div>

      <div className="sidebar__content">
        <CheckboxFilter />
        <PriceFilter />
      </div>
    </div>
  );
};

export default Filters;
