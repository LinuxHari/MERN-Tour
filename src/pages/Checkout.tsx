import CheckoutForm from "../components/BookingSubmission/CheckoutForm";
import PayElement from "../components/Shared/PayElement/PayElement";
import {CURRENCIES} from "../data";
import withAuth from "../hocs/withAuth";
import useLocalStorage from "../hooks/Shared/useLocalStorage";

const Checkout = () => {
  const [currency] = useLocalStorage("currency", CURRENCIES[0].value);

  return (
    <main className="bg-light-1">
      <section className="layout-pt-md layout-pb-lg mt-header">
        <div className="container">
          <PayElement currency={currency as string}>
            <CheckoutForm />
          </PayElement>
        </div>
      </section>
    </main>
  );
};

const AuthorizedCheckout = withAuth(Checkout);

export default AuthorizedCheckout;
