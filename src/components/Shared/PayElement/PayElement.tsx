import {loadStripe} from "@stripe/stripe-js";
import {Elements} from "@stripe/react-stripe-js";
import envConfig from "../../../config/envConfig";

type PayElementProps = {
  children: React.ReactNode;
  currency: string;
};

const PayElement = ({children, currency}: PayElementProps) => {
  const stripePromise = loadStripe(envConfig.STRIPE_PK);

  return (
    <Elements
      stripe={stripePromise}
      options={{amount: 10000, currency: (currency as string).toLowerCase(), mode: "payment"}}
    >
      {/* Amount can be any minium amount stripe allow for that currency, since payment will be only charged from the amount payment intent contains  */}
      {children}
    </Elements>
  );
};

export default PayElement;
