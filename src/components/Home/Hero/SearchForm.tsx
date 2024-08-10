import Button from "../../shared/Button/Button"
import SearchDatePicker from "./SearchDatePicker"
import SearchSuggestions from "./SearchSuggestions"
import TourType from "./TourType"

const SearchForm = () => {
  return (
    <div className="searchForm -type-1">
    <div className="searchForm__form">
      <div className="searchFormItem js-select-control js-form-dd">
        <div className="searchFormItem__button" data-x-click="location">
          <div className="searchFormItem__icon size-50 rounded-12 border-1 flex-center">
            <i className="text-20 icon-pin"></i>
          </div>
          <div className="searchFormItem__content">
            <h5>Where</h5>
            <div className="js-select-control-chosen">Search destinations</div>
          </div>
        </div>
        <SearchSuggestions/>
      </div>
      <SearchDatePicker/>
      <TourType/>
    </div>

    <div className="searchForm__button">
      <Button buttonType="primary" showIcon={false}>
        <i className="icon-search text-16 mr-10"></i>
        Search
      </Button>
    </div>
  </div>
  )
}

export default SearchForm