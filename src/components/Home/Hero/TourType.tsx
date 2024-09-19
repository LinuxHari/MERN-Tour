import { tourTypes } from "../../../config/tourConfig";
import useDropdownFocus from "../../../hooks/useDropdownFocus";

const TourType = () => {
 
  const { dropdownRef, showDropdown } = useDropdownFocus()

  return (
    <div className="searchFormItem js-select-control js-form-dd" ref={dropdownRef}>
      <div className="searchFormItem__button" data-x-click="tour-type">
        <div className="searchFormItem__icon size-50 rounded-12 border-1 flex-center">
          <i className="text-20 icon-flag"></i>
        </div>
        <div className="searchFormItem__content">
          <h5>Tour Type</h5>
          <div className="js-select-control-chosen">All tours</div>
        </div>
      </div>

      <div className={`searchFormItemDropdown -tour-type ${showDropdown? "is-active": ""}`} data-x="tour-type" data-x-toggle="is-active">
        <div className="searchFormItemDropdown__container">
          <div className="searchFormItemDropdown__list sroll-bar-1">
            {tourTypes.map((type, index) => (
              <div className="searchFormItemDropdown__item" key={index}>
                <button className="js-select-control-button">
                  <span className="js-select-control-choice">{type}</span>
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default TourType;
