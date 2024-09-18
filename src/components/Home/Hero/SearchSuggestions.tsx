import useSearchSuggestionHandler from "../../../hooks/useSearchSuggestionHandler";
import Input from "../../Shared/Input/Input";

const SearchSuggestions = () => {
  const {dropdownRef, showDropdown, suggestions, searchText, setSearchText, isFetching, inputRef } = useSearchSuggestionHandler()

  return (
    <div className="searchFormItem js-select-control js-form-dd" ref={dropdownRef}>
      <div className="searchFormItem__button" data-x-click="location">
        <div className="searchFormItem__icon size-50 rounded-12 border-1 flex-center">
          <i className="text-20 icon-pin"></i>
        </div>
        <div className="searchFormItem__content">
          <h5>Where</h5>
          <div className="js-select-control-chosen">Search destinations</div>
        </div>
      </div>
     <div
        className={`contactForm searchFormItemDropdown -location ${showDropdown? "is-active": ""}`}
        data-x="location"
        data-x-toggle={showDropdown? "is-active": ""}
      >
        <div className="searchFormItemDropdown__container">
          <Input
            type="text"
            label="Search"
            className="py-0 h-50"
            value={searchText}
            onChange={(e) => setSearchText(e.currentTarget.value.trim())}
            ref={inputRef}
          />
          <div className="searchFormItemDropdown__list sroll-bar-1">
            {isFetching? <p className="d-flex py-2 js-select-control-choice">Loading...</p>:
              Object.entries(suggestions).map(([locationType, locations]) =>
                locations.map((location) => (
                  <div className="searchFormItemDropdown__item" key={location + locationType}>
                    <button className="js-select-control-button">
                      <span className="js-select-control-choice">{location}</span>
                      <span>{locationType}</span>
                    </button>
                  </div>
                ))
              )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SearchSuggestions;
