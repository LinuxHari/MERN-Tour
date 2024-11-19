import CheckoutForm from "../components/BookingSubmission/CheckoutForm";
import PayElement from "../components/Shared/PayElement/PayElement";

const Checkout = () => { 
  return (
   <main className="bg-light-1">
     <section className="layout-pt-md layout-pb-lg mt-header">
      <div className="container">
      <PayElement>
        <CheckoutForm/>
      </PayElement>
      </div>
    </section>
   </main>
  );
};

export default Checkout;
