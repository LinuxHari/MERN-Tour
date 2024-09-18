import Button from "../../Shared/Button/Button"
import SearchDatePicker from "./SearchDatePicker"
import SearchSuggestions from "./SearchSuggestions"
import TourType from "./TourType"

const SearchForm = () => {
  return (
    <div className="searchForm -type-1">
    <div className="searchForm__form">
      <SearchSuggestions/>
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