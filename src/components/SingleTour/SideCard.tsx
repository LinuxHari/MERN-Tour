import { PaxProps } from "../../type";
import PaxCounter from "../Shared/PaxCounter/PaxCounter";
import usePaxHandler from "../../hooks/usePaxHandler";

type SideCardProps = {
  pax: PaxProps;
  price: number;
};

const SideCard = ({ price, pax }: SideCardProps) => {
  const { currentPax, setPax } = usePaxHandler(pax)

  const total = Object.values(currentPax).reduce((val1, val2) => val1 + val2) * price

  return (
    <div className="d-flex justify-end js-pin-content">
      <div className="tourSingleSidebar">
        {/* <div className="d-flex items-center">
            <div>From</div>
            <div className="text-20 fw-500 ml-10">$1,200</div>
          </div>

          <div className="searchForm -type-1 -sidebar mt-20">
            <div className="searchForm__form">
              <div className="searchFormItem js-select-control js-form-dd js-calendar">
                <div className="searchFormItem__button" data-x-click="calendar">
                  <div className="searchFormItem__icon size-50 rounded-12 bg-light-1 flex-center">
                    <i className="text-20 icon-calendar"></i>
                  </div>
                  <div className="searchFormItem__content">
                    <h5>From</h5>
                    <div>
                      <span className="js-first-date">Add dates</span>
                      <span className="js-last-date"></span>
                    </div>
                  </div>
                  <div className="searchFormItem__icon_chevron">
                    <i className="icon-chevron-down d-flex text-18"></i>
                  </div>
                </div>

                <div
                  className="searchFormItemDropdown -calendar"
                  data-x="calendar"
                  data-x-toggle="is-active"
                >
                  <div className="searchFormItemDropdown__container">
                    <div className="searchMenu-date -searchForm js-form-dd js-calendar-el">
                      <div
                        className="searchMenu-date__field shadow-2"
                        data-x-dd="searchMenu-date"
                        data-x-dd-toggle="-is-active"
                      >
                        <div className="bg-white rounded-4">
                          <div className="elCalendar js-calendar-el-calendar"></div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div> */}

        <div className="mb-20">
        <h5 className="text-18 fw-500">Tickets</h5>
        <p className="text-light-2 text-14">You can book for upto 10 people at a time</p>
        </div>
        <PaxCounter setPax={setPax} pax={currentPax} price={price}/>
        <div className="line mt-20 mb-20"></div>

        <div className="d-flex items-center justify-between">
          <div className="text-18 fw-500">Total:</div>
          <div className="text-18 fw-500">${total.toFixed(2)}</div>
        </div>

        <button className="button -md -dark-1 col-12 bg-accent-1 text-white mt-20">
          Book Now
          <i className="icon-arrow-top-right ml-10"></i>
        </button>
      </div>
    </div>
  );
};

export default SideCard;
