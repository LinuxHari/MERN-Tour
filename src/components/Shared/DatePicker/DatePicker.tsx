import {useState} from "react";
import {Calendar, DateObject} from "react-multi-date-picker";
import getDefaultDateRange from "../../../utils/getDefaultDateRange";
import useWindowSize from "../../../hooks/Shared/useWindowSize";

type DateRangeType = {
  startDate: Date | null;
  endDate: Date | null;
};

type DatePickerProps = {
  onChange: (dates: DateRangeType) => void;
};

const DatePicker = ({onChange}: DatePickerProps) => {
  const {startDate, endDate, maxDate} = getDefaultDateRange();
  const [selectedDates, setSelectedDates] = useState<DateObject[]>([
    new DateObject(startDate),
    new DateObject(endDate),
  ]);

  const {isMobile} = useWindowSize();

  const handleDateChange = (dates: DateObject[]) => {
    if (dates.length < 1) return;

    const sortedDates = dates.sort((a, b) => a.toDate().getTime() - b.toDate().getTime());

    setSelectedDates(sortedDates);

    onChange({
      startDate: sortedDates[0]?.toDate() ?? null,
      endDate: sortedDates[sortedDates.length - 1]?.toDate() ?? null,
    });
  };

  return (
    <div translate="no">
      <Calendar
        value={selectedDates}
        onChange={handleDateChange}
        range
        numberOfMonths={isMobile ? 1 : 2}
        minDate={new DateObject(startDate)}
        maxDate={new DateObject(maxDate)}
      />
    </div>
  );
};

export default DatePicker;
