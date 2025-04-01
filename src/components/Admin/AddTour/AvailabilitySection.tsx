import {Calendar} from "react-multi-date-picker";
import {Controller, useFormContext} from "react-hook-form";
import useWindowSize from "../../../hooks/Shared/useWindowSize";
import {getDefaultDateRange} from "../../../utils/getDefaultDateRange";
import dateObjectConverter from "../../../utils/dateObjectConverter";

const AvailabilitySection = () => {
  const {isMobile, isSmallDesktop} = useWindowSize();
  const {control} = useFormContext();
  const {startDate, maxDate} = getDefaultDateRange("year");
  const numOfMonths = isMobile ? 1 : isSmallDesktop ? 2 : 3;

  return (
    <div style={{minHeight: "45vh"}}>
      <Controller
        control={control}
        name="availableDates"
        render={({field: {onChange, value}}) => (
          <Calendar
            numberOfMonths={numOfMonths}
            multiple={true}
            value={value}
            onChange={(dates) => onChange(dateObjectConverter(dates))}
            minDate={startDate}
            maxDate={maxDate}
          />
        )}
      />
    </div>
  );
};

export default AvailabilitySection;
