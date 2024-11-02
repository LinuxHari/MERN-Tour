import BookingDetailsCard from "../components/BookingSubmission/BookingDetailsCard";
import PaymentForm from "../components/BookingSubmission/PaymentForm";
import TravellerInfoForm from "../components/BookingSubmission/TravellerInfoForm";

const Checkout = () => {
  return (
   <main className="bg-light-1">
     <section className="layout-pt-md layout-pb-lg mt-header">
      <div className="container">
        <div className="row">
          <div className="col-lg-8">
            <TravellerInfoForm/>
            <PaymentForm/>
          </div>
          <div className="col-lg-4">
          <BookingDetailsCard/>
          </div>
        </div>
      </div>
    </section>
   </main>
  );
};

export default Checkout;
