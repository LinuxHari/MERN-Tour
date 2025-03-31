import {PaxProps} from "../../type";
import PaxCounter from "../Shared/PaxCounter/PaxCounter";
import {TourSchemaType} from "../../schema/tourSchema";
import useSideCardUtils from "../../hooks/Tours/useSideCardUtils";
import Button from "../Shared/Button/Button";
import LoginModal from "../Auth/LoginModal";
import SingleDatePicker from "../Shared/DatePicker/SingleDatePicker";
import CardSkeleton from "../Skeletons/CardSkeleton";
import AvailabilityErrorModal from "./AvailabilityErrorModal";
import NotAvailableModal from "./NotAvailableModal";

type SideCardProps = {
  pax: PaxProps;
  price: TourSchemaType["price"];
  startDate: string;
  endDate: string;
  tourId: string;
  setStartDate: (date: Date) => void;
};

const SideCard = ({price, pax, startDate, endDate, tourId, setStartDate}: SideCardProps) => {
  const {
    currentPax,
    total,
    setPax,
    isLoading,
    isError,
    availableDates,
    isAvailabilityLoading,
    handleLogin,
    handleReserve,
    showModal,
    isLoginLoading,
    isLoggedIn,
    onClose,
    showErrorModal,
    onErrorClose,
    goBack,
    showAvailModal,
    onAvailClose,
    isVerificationError,
  } = useSideCardUtils({price, pax, startDate, endDate, tourId});

  return (
    <>
      {isAvailabilityLoading ? (
        <CardSkeleton />
      ) : isError ? (
        <AvailabilityErrorModal showModal={showErrorModal} onClose={onErrorClose} onConfirm={goBack} />
      ) : (
        <div className="d-flex justify-end js-pin-content w-100">
          <div className="tourSingleSidebar">
            <div className="mb-20">
              <h5 className="text-18 fw-500">Tickets</h5>
              <p className="text-light-2 text-14">You can book for upto 10 people at a time</p>
            </div>
            <SingleDatePicker startDate={new Date(startDate)} setStartDate={setStartDate} dateRange={availableDates} />
            <PaxCounter setPax={setPax} pax={currentPax} price={price} />
            <div className="line mt-20 mb-20" />
            <div className="d-flex items-center justify-between">
              <div className="text-18 fw-500">Total:</div>
              <div className="text-18 fw-500">${total.toFixed(2)}</div>
            </div>
            <Button buttonType="primary" className="w-100 mt-3" onClick={handleReserve} disabled={isLoading}>
              {isLoggedIn ? "Book Now" : "Log In"}
            </Button>
          </div>
          <LoginModal
            onClose={onClose}
            onConfirm={handleLogin}
            showModal={showModal}
            isLoading={isLoginLoading}
            isVerificationError={isVerificationError}
          />
          <NotAvailableModal showModal={showAvailModal} onClose={onAvailClose} />
        </div>
      )}
    </>
  );
};

export default SideCard;
