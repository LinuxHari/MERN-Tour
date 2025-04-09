import {forwardRef} from "react";
import {useFormContext} from "react-hook-form";
import {TOUR_TYPES} from "../../../config/tourConfig";
import Select2 from "../../Shared/Select/Select2";

const TourType = forwardRef<HTMLDivElement>((_, ref) => {
  const {setValue, watch} = useFormContext();
  const tourType = watch("tourType");

  return (
    <Select2 onSelect={(value: string) => setValue("tourType", value)} className="tourType">
      <Select2.Button>
        <div className="searchFormItem__icon size-50 rounded-12 border-1 flex-center">
          <i className="text-20 icon-flag" />
        </div>
        <div className="searchFormItem__content" ref={ref}>
          <h5>Tour Type</h5>
          <p className="js-select-control-chosen">{tourType || "Category"}</p>
        </div>
      </Select2.Button>

      <Select2.Menu className="w-125">
        {TOUR_TYPES.map((type) => (
          <Select2.Option value={type} key={type}>
            <span className="js-select-control-choice">{type}</span>
          </Select2.Option>
        ))}
      </Select2.Menu>
    </Select2>
  );
});

TourType.displayName = "TourType";

export default TourType;
