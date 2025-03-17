import "react-date-range/dist/styles.css";
import "react-date-range/dist/theme/default.css";

import {DateRange, Range, RangeKeyDict} from "react-date-range";
import React, {useState} from "react";
import {getDefaultDateRange} from "../../../utils/getDefaultDateRange";
import useWindowSize from "../../../hooks/useWindowSize";

type DateRangeType = {
  startDate: Date | null;
  endDate: Date | null;
};

type DatePickerProps = {
  onChange: (dates: DateRangeType) => void;
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
