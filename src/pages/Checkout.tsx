import CheckoutForm from "../components/BookingSubmission/CheckoutForm";
import PayElement from "../components/Shared/PayElement/PayElement";
import withAuth from "../hocs/withAuth";

const Checkout = () => {
  return (
    <main className="bg-light-1">
      <section className="layout-pt-md layout-pb-lg mt-header">
        <div className="container">
          <PayElement>
            <CheckoutForm />
          </PayElement>
        </div>
      </section>
    </main>
  );
};

const AuthorizedCheckout = withAuth(Checkout);

export default AuthorizedCheckout;
