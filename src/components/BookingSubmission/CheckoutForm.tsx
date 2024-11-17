import { useForm } from "react-hook-form";
import BookingDetailsCard from "./BookingDetailsCard";
import TravellerInfoForm from "./TravellerInfoForm";
import BookingSchema, { BookingSchemaType } from "../../schema/bookingSchema";
import { zodResolver } from "@hookform/resolvers/zod";
import useBookingHandler from "../../hooks/useBookingHandler";
import Timeout from "./Timeout";
import { Elements, PaymentElement } from "@stripe/react-stripe-js";
import {loadStripe} from '@stripe/stripe-js';
import envConfig from "../../config/envConfig";

const CheckoutForm = () => {
  const defaultValue = {};
  const { register, handleSubmit, formState: { errors }, setValue } = useForm<BookingSchemaType>({ resolver: zodResolver(BookingSchema) });
  const { book, reservedTour, isReservedDetailsError, isReservedDetailsLoading } = useBookingHandler()
  const stripePromise = loadStripe(envConfig.STRIPE_PK)

  if(!reservedTour)
    return <></>
  return (
    <Elements stripe={stripePromise} options={{amount: 1000,currency: "usd", mode: "payment"}}>
      <form className="row d-flex" onSubmit={handleSubmit(book)} noValidate>
      <div className="col-lg-8 order-lg-1 bg-white px-5 py-5 rounded-12">
        <TravellerInfoForm register={register} setValue={setValue} />
        <PaymentElement className="my-5"/>
      </div>
      <Timeout expiresAt={reservedTour.expiresAt} />
      <BookingDetailsCard isPayformLoaded={true} reservedTour={reservedTour} isLoading={isReservedDetailsLoading} isError={isReservedDetailsError} />
    </form>
    </Elements>
  );
};

export default CheckoutForm;
