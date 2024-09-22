import { useFormContext } from "react-hook-form";
import { tourTypes } from "../../../config/tourConfig";
import Dropdown from "../../Shared/Dropdown/Dropdown";
import Select2 from "../../Shared/Select/Select2";

const TourType = () => {
  const { setValue, watch } = useFormContext();

  const tourType = watch("tourType");

  return (
    <Select2 onSelect={(value: string) => setValue("tourType", value)}>
      <Select2.Button>
        <div className="searchFormItem__icon size-50 rounded-12 border-1 flex-center">
          <i className="text-20 icon-flag"></i>
        </div>
        <div className="searchFormItem__content">
          <h5>Tour Type</h5>
          <p className="js-select-control-chosen">{tourType || "Category"}</p>
        </div>
      </Select2.Button>

      <Select2.Menu>
        {tourTypes.map((type) => (
          <Select2.Option value={type} key={type}>
            <span className="js-select-control-choice">{type}</span>
          </Select2.Option>
        ))}
      </Select2.Menu>
    </Select2>
  );
};

export default TourType;
