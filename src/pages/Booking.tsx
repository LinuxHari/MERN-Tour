import BookingInfo from "../components/BookingSuccess/BookingInfo";
import CancelModal from "../components/BookingSuccess/CancelModal";
import TourDetails from "../components/BookingSuccess/TourDetails";
import Button from "../components/Shared/Button/Button";
import NoResult from "../components/Shared/NoResult/NoResult";
import BookingFormSkeleton from "../components/Skeletons/BookingFormSkeleton";
import withAuth from "../hocs/withAuth";
import useAfterBookingHandler from "../hooks/Tours/useAfterBookingHandler";
import useModal from "../hooks/Shared/useModal";

const Booking = () => {
  const {booking, isBookingLoading, isBookingError, isCancelLoading, cancelBooking, bookingId} =
    useAfterBookingHandler();
  const {onClose, showModal, onConfirm, openModal} = useModal();

  if (isBookingLoading)
    return (
      <div className="mt-80">
        <BookingFormSkeleton />
      </div>
    );

  if (isBookingError || !booking)
    return (
      <div className="d-flex align-items-center justify-content-center" style={{minHeight: "100vh"}}>
        <NoResult title="Unable to Load Booking Details" description="Check internet connection and try again later" />
      </div>
    );

  const {tourInfo, amount, ...bookingInfo} = booking;

  return (
    <main className="bg-light-1" style={{minHeight: "80vh"}}>
      <section className="layout-pt-md layout-pb-lg mt-header">
        <div className="container">
          <div className="row">
            <div className="col-lg-8 bg-white rounded-12 shadow-2 py-30 px-20">
              <BookingInfo {...bookingInfo} amount={amount} bookingId={bookingId} />
              <div className="container mt-3">
                <div className="row g-2 justify-content-end">
                  {bookingInfo.isCancellable &&
                    bookingInfo.status !== "canceled" &&
                    bookingInfo.status !== "failed" && (
                      <div className="col-12 col-md-auto">
                        <Button buttonType="secondary" className="w-100" onClick={openModal} disabled={isCancelLoading}>
                          Cancel
                        </Button>
                      </div>
                    )}
                  <div className="col-12 col-md-auto">
                    <Button className="w-100" buttonType="link" to="/">
                      Book again
                    </Button>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4 px-0">
              <TourDetails {...tourInfo} amount={amount} />
            </div>
          </div>
        </div>
      </section>
      <CancelModal
        showModal={showModal}
        onClose={onClose}
        onConfirm={() => onConfirm(cancelBooking)}
        paid={amount}
        refundable={booking.refundableAmount}
      />
    </main>
  );
};

const AuthorizedBooking = withAuth(Booking);

export default AuthorizedBooking;
