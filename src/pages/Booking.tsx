import BookingInfo from "../components/BookingSuccess/BookingInfo";
import CancelModal from "../components/BookingSuccess/CancelModal";
import TourDetails from "../components/BookingSuccess/TourDetails";
import Button from "../components/Shared/Button/Button";
import NoResult from "../components/Shared/NoResult/NoResult";
import BookingFormSkeleton from "../components/Skeletons/BookingFormSkeleton";
import withAuth from "../hocs/withAuth";
import useAfterBookingHandler from "../hooks/useAfterBookingHandler";
import useModal from "../hooks/useModal";

const Booking = () => {
  const {
    booking,
    isBookingLoading,
    isBookingError,
    isCancelLoading,
    cancelBooking,
    bookingId,
  } = useAfterBookingHandler();
  const {onClose, showModal, onConfirm, openModal} = useModal();

  if (isBookingLoading)
    return (
      <div className="mt-80">
        <BookingFormSkeleton />
      </div>
    );

  if (isBookingError || !booking)
    return (
      <NoResult
        title="Unable to Load Booking Details"
        description="Check internet connection and try again later"
      />
    );

  const {tourInfo, amount, ...bookingInfo} = booking;

  return (
    <main className="bg-light-1" style={{minHeight: "80vh"}}>
      <section className="layout-pt-md layout-pb-lg mt-header">
        <div className="container">
          <div className="row">
            <div className="col-lg-8 bg-white rounded-12 shadow-2 py-30 px-30 md:py-20 md:px-20 relative">
              <BookingInfo
                {...bookingInfo}
                amount={amount}
                bookingId={bookingId}
              />
              <div className="d-flex items-center justify-end mt-3">
                {bookingInfo.isCancellable &&
                  bookingInfo.status !== "canceled" &&
                  bookingInfo.status !== "failed" && (
                    <Button
                      buttonType="secondary"
                      onClick={openModal}
                      disabled={isCancelLoading}
                    >
                      Cancel
                    </Button>
                  )}
                <Button className="ml-20" buttonType="link" to="/">
                  Book again
                </Button>
              </div>
            </div>
            <div className="col-lg-4">
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
