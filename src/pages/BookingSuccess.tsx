import BookingInfo from "../components/BookingSuccess/BookingInfo"
import TourDetails from "../components/BookingSuccess/TourDetails"

const BookingSuccess = () => {
  return (
    <main className="bg-light-1">
     <section className="layout-pt-md layout-pb-lg mt-header">
      <div className="container">
        <div className="row">
          <div className="col-lg-8">
           <BookingInfo/>
          </div>
          <div className="col-lg-4">
          <TourDetails />
          </div>
        </div>
      </div>
    </section>
   </main>
  )
}

export default BookingSuccess