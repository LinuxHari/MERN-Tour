import DatePicker from "../../Shared/DatePicker/DatePicker"

const SearchDatePicker = () => {
  return (
    <div className="searchFormItem js-select-control js-form-dd js-calendar">
        <div className="searchFormItem__button" data-x-click="calendar">
          <div className="searchFormItem__icon size-50 rounded-12 border-1 flex-center">
            <i className="text-20 icon-calendar"></i>
          </div>
          <div className="searchFormItem__content">
            <h5>When</h5>
            <div>
              <span className="js-first-date">Add dates</span>
              <span className="js-last-date"></span>
            </div>
          </div>
        </div>
        <DatePicker/>
      </div>
  )
}

export default SearchDatePicker