import { tourTypes } from "../../config/tourConfig";
// import DatePicker from "../Shared/DatePicker/DatePicker";
import { FiltersProps } from "../../type";
import CheckboxFilter from "./CheckboxFilter";
import PriceFilter from "./PriceFilter";

const FiltersCard = (props: FiltersProps) => {
  const filterGroup = {
    "Tour Type": [
     ...tourTypes
    ],
    Duration: ["2 days", "3 days", "5 days", "7 days", "More than 7 days"],
    Language: ["English", "Dutch", "German", "French", "Italian"],
    Rating: ["Outstanding (5)", "Great (4)", "Satisfactory  (3)"],
    Specials: [
      "Deals & Discounts",
      "Free Cancellation",
      "Likely to Sell Out",
      "Skip-The-Line",
      "Private Tour",
    ],
  };

  return (
    <div className="sidebar -type-1 rounded-12">
      <div className="sidebar__header bg-accent-1">
        <div className="text-15 text-white fw-500">When are you traveling?</div>
        <div className="mt-10">
          {/* <DatePicker /> */}
        </div>
      </div>

      <div className="sidebar__content d-flex flex-column">
        {Object.entries(filterGroup).map(([key, value], index) => (
          <div className={`order-${index === 0 ? index : index + 1}`} key={key}>
            <CheckboxFilter title={key} filters={value} />
          </div>
        ))}
        <div className="order-1">
          <PriceFilter {...props}/>
        </div>
      </div>
    </div>
  );
};

export default FiltersCard;
