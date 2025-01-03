import {loadStripe} from "@stripe/stripe-js";
import {Elements} from "@stripe/react-stripe-js";
import envConfig from "../../../config/envConfig";

type PayElementProps = {
  children: React.ReactNode;
};

const PayElement = ({children}: PayElementProps) => {
  const stripePromise = loadStripe(envConfig.STRIPE_PK);

  return (
    <Elements stripe={stripePromise} options={{amount: 10000, currency: "usd", mode: "payment"}}>
      {/* Amount can be any minium amount stripe allow for that currency, since payment will be only charged from the amount payment intent contains  */}
      {children}
    </Elements>
  );
};

export default PayElement;
