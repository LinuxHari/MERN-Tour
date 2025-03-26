import "react-date-range/dist/styles.css";
import "react-date-range/dist/theme/default.css";

import {useState} from "react";
import {Calendar} from "react-date-range";
import Dropdown from "../Dropdown/Dropdown";
import {getDefaultDateRange} from "../../../utils/getDefaultDateRange";

type SingleDatePickerProps = {
  startDate: Date;
  setStartDate: (date: Date) => void;
  dateRange?: Date[];
};

const SingleDatePicker = ({startDate, setStartDate, dateRange}: SingleDatePickerProps) => {
  const [close, setClose] = useState(false);
  const {startDate: defaultStartDate, maxDate} = getDefaultDateRange();

  const onDateChange = (date: Date) => {
    if (dateRange?.some((d) => d.toDateString() === date.toDateString())) {
      setStartDate(date);
      setClose(true);
    }
  };

  const getDisabledDates = () => {
    const disabledDates: Date[] = [];
    const start = new Date(defaultStartDate);
    const end = new Date(maxDate);

    for (let d = new Date(start); d <= end; d.setDate(d.getDate() + 1)) {
      if (!dateRange?.some((availableDate) => availableDate.toDateString() === d.toDateString())) {
        disabledDates.push(new Date(d));
      }
    }

    return disabledDates;
  };

  return (
    <Dropdown
      className="searchFormItem js-select-control js-form-dd js-calendar"
      close={close}
      setClose={(value: boolean) => setClose(value)}
    >
      <Dropdown.Toggle className="searchFormItem__button border w-100 mb-3 rounded-12" data-x-click="calendar">
        <div className="searchFormItem__icon size-50 rounded-12 border-1 flex-center">
          <i className="text-20 icon-calendar" />
        </div>
        <div className="searchFormItem__content mx-2">
          <p className="text-start mb-0">Start Date</p>
          <p className="text-14 text-light-2 mb-0">{startDate.toDateString()}</p>
        </div>
      </Dropdown.Toggle>
      <Dropdown.Content className="absolute top-50 start-50 translate-middle-x z-5">
        <Calendar
          date={startDate}
          onChange={onDateChange}
          color="#eb662b"
          minDate={new Date(defaultStartDate)}
          maxDate={new Date(maxDate)}
          disabledDates={getDisabledDates()}
        />
      </Dropdown.Content>
    </Dropdown>
  );
};

export default SingleDatePicker;
