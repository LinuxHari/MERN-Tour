import {useState} from "react";
import {Calendar, DateObject} from "react-multi-date-picker";
import Dropdown from "../Dropdown/Dropdown";
import getDefaultDateRange from "../../../utils/getDefaultDateRange";

type SingleDatePickerProps = {
  startDate: Date;
  setStartDate: (date: Date) => void;
  dateRange?: {date: Date; extraInfo?: number | string}[];
};

const SingleDatePicker = ({startDate, setStartDate, dateRange}: SingleDatePickerProps) => {
  const [close, setClose] = useState(false);
  const {startDate: defaultStartDate, maxDate} = getDefaultDateRange();

  const onDateChange = (date: DateObject | null) => {
    if (!date || !dateRange || !Array.isArray(dateRange)) return;

    const selectedDate = new Date(date.year, date.month.number - 1, date.day);

    const isValidDate = dateRange.some((d) => d.date.toDateString() === selectedDate.toDateString());

    if (isValidDate) {
      setStartDate(selectedDate);
      setClose(true);
    }
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
      <Dropdown.Content className="absolute top-100 start-50 translate-middle-x z-5">
        <Calendar
          value={new DateObject(startDate)}
          onChange={onDateChange}
          minDate={new DateObject(defaultStartDate)}
          maxDate={new DateObject(maxDate)}
          mapDays={({date}) => {
            const jsDate = new Date(date.year, date.month.number - 1, date.day);
            const foundDate = dateRange?.find((d) => d.date.toDateString() === jsDate.toDateString());

            const isBeforeMinDate = jsDate.getTime() < new Date(defaultStartDate).setHours(0, 0, 0, 0);

            return {
              disabled: !foundDate,
              children: (
                <div style={{position: "relative", textAlign: "center", fontSize: "12px"}}>
                  <span>{date.day}</span>
                  {foundDate?.extraInfo && !isBeforeMinDate && (
                    <div
                      style={{
                        position: "absolute",
                        bottom: "2px",
                        right: "5px",
                        fontSize: "9px",
                        color: "blue",
                      }}
                    >
                      {foundDate.extraInfo}
                    </div>
                  )}
                </div>
              ),
            };
          }}
        />
      </Dropdown.Content>
    </Dropdown>
  );
};

export default SingleDatePicker;
