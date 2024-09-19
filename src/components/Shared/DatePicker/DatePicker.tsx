import "react-date-range/dist/styles.css"; // main style file
import "react-date-range/dist/theme/default.css"; // theme css file

import { DateRange } from "react-date-range";
import { useState } from "react";

const DatePicker = () => {
  const [dateRange, setDateRange] = useState([
    {
      startDate: new Date(),
      endDate: new Date(),
      key: "selection",
    },
  ]);

  return (
    <div className="absolute top-50 z-5">
      <DateRange className="searchFormItemDropdown__container" months={2} direction="horizontal" ranges={dateRange} rangeColors={["#EB662B"]} editableDateInputs onChange={(dates: any) => setDateRange([dates.selection])} />
    </div>
  );
};

export default DatePicker;
