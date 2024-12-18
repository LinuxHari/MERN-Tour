import BookingInfo from "../components/BookingSuccess/BookingInfo"
import TourDetails from "../components/BookingSuccess/TourDetails"
import useAfterBookingHandler from "../hooks/useAfterBookingHandler"

const BookingSuccess = () => {
  const { booking, isBookingLoading, isBookingError, isCancelError, isCancelLoading, cancelBooking, bookingId } = useAfterBookingHandler()

  if(isBookingError || !booking)
    return <></>

  if(isBookingLoading)
    return <></>

  const { tourInfo, amount, ...bookingInfo } = booking

  return (
    <main className="bg-light-1">
     <section className="layout-pt-md layout-pb-lg mt-header">
      <div className="container">
        <div className="row">
          <div className="col-lg-8">
           <BookingInfo {...bookingInfo} amount={amount} bookingId={bookingId} cancel={cancelBooking} />
          </div>
          <div className="col-lg-4">
          <TourDetails {...tourInfo} amount={amount} />
          </div>
        </div>
      </div>
    </section>
   </main>
  )
}

export default BookingSuccess