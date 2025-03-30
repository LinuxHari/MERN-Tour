import {Calendar} from "react-multi-date-picker";
import {Controller, useFormContext} from "react-hook-form";
import useWindowSize from "../../../hooks/Shared/useWindowSize";
import {getDefaultDateRange} from "../../../utils/getDefaultDateRange";
import dateObjectConverter from "../../../utils/dateObjectConverter";

const AvailabilitySection = () => {
  const {isSmallScreen, isMobile} = useWindowSize();
  const {control} = useFormContext();
  const {startDate, maxDate} = getDefaultDateRange("year");

  return (
    <div style={{minHeight: "35vh"}}>
      <Controller
        control={control}
        name="availableDates"
        render={({field: {onChange, value}}) => (
          <Calendar
            numberOfMonths={isMobile ? 1 : isSmallScreen ? 2 : 3}
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
