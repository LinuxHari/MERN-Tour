import { useEffect, useState } from "react";
import DatePicker from "../shared/DatePicker/DatePicker";
import CheckboxFilter from "./CheckboxFilter";
import PriceFilter from "./PriceFilter";
import { useWindowSize } from "../../hooks/useWindowSize";

const Filters = () => {

  const [isShowFilter, setShowFilter] = useState(false) 

  const {width} = useWindowSize()

  useEffect(() => {
    if(width < 1024){
      setShowFilter(false)
    } else {
      setShowFilter(true)
    }
  }, [width])

  const filterGroup = {
    "Tour Type": [
      "Nature Tours",
      "Adventure Tours",
      "Cultural Tours",
      "Food Tours",
      "City Tours",
      "Cruises Tours",
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
    <>
      <button className={`button -dark-1 bg-light-1 px-25 py-10 border-1 rounded-12 d-flex d-lg-none ${isShowFilter? "mb-4": "mb-0"}`} onClick={() => setShowFilter(!isShowFilter)}>
        <i className="icon-sort-down mr-10 text-16"></i>
        Filter
      </button>
      {isShowFilter && <div className="sidebar -type-1 rounded-12">
        <div className="sidebar__header bg-accent-1">
          <div className="text-15 text-white fw-500">
            When are you traveling?
          </div>
          <div className="mt-10">
            <DatePicker />
          </div>
        </div>

        <div className="sidebar__content d-flex flex-column">
          {Object.entries(filterGroup).map(([key, value], index) => (
            <div
              className={`order-${index === 0 ? index : index + 1}`}
              key={key}
            >
              <CheckboxFilter title={key} filters={value} />
            </div>
          ))}
          <div className="order-1">
            <PriceFilter />
          </div>
        </div>
      </div>}
    </>
  );
};

export default Filters;
