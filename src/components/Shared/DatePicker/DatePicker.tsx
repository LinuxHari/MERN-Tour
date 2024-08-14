const DatePicker = () => {
  return (
        <div className="searchFormItemDropdown -calendar" data-x="calendar" data-x-toggle="is-active">
          <div className="searchFormItemDropdown__container">
            <div className="searchMenu-date -searchForm js-form-dd js-calendar-el">
              <div className="searchMenu-date__field shadow-2" data-x-dd="searchMenu-date" data-x-dd-toggle="-is-active">
                <div className="bg-white rounded-4">
                  <div className="elCalendar js-calendar-el-calendar"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
  )
}

export default DatePicker