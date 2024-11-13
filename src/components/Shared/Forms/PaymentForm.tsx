import { loadStripe } from '@stripe/stripe-js';
import envConfig from '../../../config/envConfig';
import { Elements, PaymentElement } from '@stripe/react-stripe-js';

type PaymentFormProps = {
    clientSecret: string;
}

const PaymentForm = ({ clientSecret }: PaymentFormProps) => {
    const stripePromise = loadStripe(envConfig.STRIPE_PK)
  return (
    <Elements stripe={stripePromise} options={{clientSecret}}>
        <PaymentElement />
    </Elements>
  )
}

export default PaymentForm