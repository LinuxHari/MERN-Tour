import "react-date-range/dist/styles.css"; // main style file
import "react-date-range/dist/theme/default.css"; // theme css file

import {DateRange, Range, RangeKeyDict} from "react-date-range";
import React, {useState} from "react";
import {getDefaultDateRange} from "../../../utils/getDefaultDateRange";
import useWindowSize from "../../../hooks/useWindowSize";

type DateRangeType = {
  startDate: Date | null; // Adjust type as necessary
  endDate: Date | null; // Adjust type as necessary
};

type DatePickerProps = {
  onChange: (dates: DateRangeType) => void; // Use the defined type for dates
};

const DatePicker = ({onChange}: DatePickerProps) => {
  const {startDate, endDate, maxDate} = getDefaultDateRange();
  const [dateRange, setDateRange] = useState<Range[]>([
    {
      startDate: new Date(startDate),
      endDate: new Date(endDate),
      key: "selection",
    },
  ]);

  const {width} = useWindowSize();
  const isLaptop = width >= 1200;

  const handleChange = (dates: RangeKeyDict) => {
    setDateRange([dates.selection]);
    onChange({
      startDate: dates.selection.startDate ?? null,
      endDate: dates.selection.endDate ?? null,
    });
  };

  return (
    <DateRange
      className="searchFormItemDropdown__container"
      months={isLaptop ? 2 : 1}
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

const MemoizedDatePicker = React.memo(DatePicker);

export default MemoizedDatePicker;
