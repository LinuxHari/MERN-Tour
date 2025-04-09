import {forwardRef, useState} from "react";
import {useFormContext} from "react-hook-form";
import DatePicker from "../../Shared/DatePicker/DatePicker";
import {formatDate} from "../../../utils/formatDate";
import Dropdown from "../../Shared/Dropdown/Dropdown";

const SearchDatePicker = forwardRef<HTMLDivElement>((_, ref) => {
  const {setValue, watch} = useFormContext();
  const [close, setClose] = useState(false);

  const dateRange = watch("dateRange");

  interface DateRange {
    startDate: Date | null;
    endDate: Date | null;
  }

  const onChange = (dates: DateRange) => {
    const {startDate, endDate} = dates;

    if (startDate && endDate) {
      setValue("dateRange", dates);
      if (startDate.toString() !== endDate.toString()) {
        setClose(true);
      } else {
        setClose(false);
      }
    } else {
      setClose(false);
    }
  };

  const placeholder = dateRange ? formatDate(dateRange.startDate, "MMM-DD") : "Add dates";
  const endDate = dateRange ? formatDate(dateRange.endDate, "MMM-DD") : "";

  return (
    <Dropdown
      className="searchFormItem js-select-control js-form-dd js-calendar"
      close={close}
      setClose={(value: boolean) => setClose(value)}
    >
      <Dropdown.Toggle className="searchFormItem__button" data-x-click="calendar">
        <div className="searchFormItem__icon size-50 rounded-12 border-1 flex-center">
          <i className="text-20 icon-calendar" />
        </div>
        <div className="searchFormItem__content" ref={ref}>
          <h5 className="mb-1">When</h5>
          <p className="js-first-date d-inline">{placeholder}</p>
          {dateRange && <span>&nbsp;-&nbsp;</span>}
          <p className="js-last-date d-inline">{dateRange && endDate}</p>
        </div>
      </Dropdown.Toggle>
      <Dropdown.Content className="absolute top-500 start-50 translate-middle-x z-5">
        <DatePicker onChange={onChange} />
      </Dropdown.Content>
    </Dropdown>
  );
});

SearchDatePicker.displayName = "SearchDatePicker";

export default SearchDatePicker;
