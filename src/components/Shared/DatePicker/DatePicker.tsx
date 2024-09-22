import "react-date-range/dist/styles.css"; // main style file
import "react-date-range/dist/theme/default.css"; // theme css file

import { DateRange, Range } from "react-date-range";
import React, { useState } from "react";
import { getDefaultDateRange } from "../../../utils/getDefaultDateRange";
import useWindowSize from "../../../hooks/useWindowSize";

type DatePickerProps = {
  onChange: (dates: any) => void;
};

const DatePicker = ({ onChange }: DatePickerProps) => {
  const { startDate, endDate, maxDate } = getDefaultDateRange();
  const [dateRange, setDateRange] = useState<Range[]>([
    {
      startDate: new Date(startDate),
      endDate: new Date(endDate),
      key: "selection",
    },
  ]);

  const { width } = useWindowSize()
  const isLaptop = width >= 1200

  const handleChange = (dates: any) => {
    setDateRange([dates.selection]);
    onChange({ startDate: dates.selection.startDate, endDate: dates.selection.endDate });
  };

  return (
      <DateRange
        className="searchFormItemDropdown__container"
        months={isLaptop? 2: 1}
        direction="horizontal"
        minDate={new Date(startDate)}
        maxDate={new Date(maxDate)}
        ranges={dateRange}
        rangeColors={["#EB662B"]}
        editableDateInputs
        onChange={handleChange}
      />
  );
};

export default React.memo(DatePicker);
