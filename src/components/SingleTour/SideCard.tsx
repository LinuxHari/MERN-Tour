import { PaxProps } from "../../type";
import PaxCounter from "../Shared/PaxCounter/PaxCounter";
import usePaxHandler from "../../hooks/usePaxHandler";
import { TourSchemaType } from "../../schema/tourSchema";
import Button from "../Shared/Button/Button";
import useUserHandler from "../../hooks/useUserHandler";
import LoginModal from "../Auth/LoginModal";
import useModal from "../../hooks/useModal";
import useAuthHandler from "../../hooks/useAuthHandler";
import { LoginSchemaType } from "../../schema/authSchema";
import useBookingHandler from "../../hooks/useBookingHandler";

type SideCardProps = {
  pax: PaxProps;
  price: TourSchemaType["price"];
  startDate: string;
  endDate: string;
  tourId: string;
};

const SideCard = ({ price, pax, startDate, endDate, tourId}: SideCardProps) => {
  const { currentPax, setPax } = usePaxHandler(pax)
  const total = (() => {
    let totalAmount = currentPax.adults * price.adult
    if(price?.teen)
      totalAmount += price.teen * currentPax.teens
    if(price?.child)
      totalAmount += price.child * currentPax.children
    if(price?.infant)
      totalAmount += price?.infant * currentPax.infants
    return totalAmount
  })()

  const { isLoggedIn } = useUserHandler()
  const { showModal, onClose, openModal } = useModal()
  const {onLogin, isLoginLoading} = useAuthHandler()
  const { reserve, isLoading } = useBookingHandler()
  const handleLogin = (data: LoginSchemaType) => {
    onClose()
    onLogin({skipRedirect: true, ...data})
  }

  const handleReserve = () => {    
    if(!isLoggedIn)
      openModal()
    else {
      const paxToSend = {...currentPax}
      Object.keys(paxToSend).forEach((key) => {
        if(!paxToSend[key as keyof PaxProps])
          delete paxToSend[key as keyof PaxProps]
      })
      reserve({startDate, endDate, pax: paxToSend, tourId})
    }
  }

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
        <PaxCounter setPax={setPax} pax={currentPax} price={price} />
        <div className="line mt-20 mb-20"></div>
        <div className="d-flex items-center justify-between">
          <div className="text-18 fw-500">Total:</div>
          <div className="text-18 fw-500">${total.toFixed(2)}</div>
        </div>
        <Button buttonType="primary" className="w-100 mt-3" onClick={handleReserve} disabled={isLoading}>{isLoggedIn? "Book Now": "Log In"}</Button>
      </div>
     <LoginModal onClose={onClose} onConfirm={handleLogin} showModal={showModal} isLoading={isLoginLoading}/>
    </div>
  );
};

export default SideCard;
