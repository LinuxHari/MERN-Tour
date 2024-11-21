import { useForm } from "react-hook-form";
import BookingDetailsCard from "./BookingDetailsCard";
import TravellerInfoForm from "./TravellerInfoForm";
import BookingSchema, { BookingSchemaType } from "../../schema/bookingSchema";
import { zodResolver } from "@hookform/resolvers/zod";
import useBookingHandler from "../../hooks/useBookingHandler";
import Timeout from "./Timeout";
import { PaymentElement, useElements, useStripe } from "@stripe/react-stripe-js";
import useUserHandler from "../../hooks/useUserHandler";
import { UserInfoResponse } from "../../type";
import { useParams } from "react-router-dom";

const CheckoutForm = () => {
  const {data} = useUserHandler()
  const user = data as UserInfoResponse
  const defaultValues: Partial<BookingSchemaType> = {fullName: user.firstName + user.lastName, country: user.country, phone: user.phone, email: user.email, countryCode: user.countryCode };
  const { register, handleSubmit, formState: { errors }, setValue } = useForm<BookingSchemaType>({ resolver: zodResolver(BookingSchema), defaultValues });
  const { book, reservedTour, isReservedDetailsError, isReservedDetailsLoading } = useBookingHandler()
  const stripe = useStripe()
  const elements = useElements()
  const {reserveId} = useParams()

  if(!reservedTour)
    return <></>
  return (
      <form className="row d-flex" onSubmit={handleSubmit((data) => book({...data, id: reserveId as string }, stripe, elements))} noValidate>
      <div className="col-lg-8 order-lg-1 bg-white px-4 py-4 rounded-12">
        <TravellerInfoForm register={register} setValue={setValue} />
        <PaymentElement className="my-5"/>
      </div>
      <Timeout expiresAt={reservedTour.expiresAt} />
      <BookingDetailsCard isPayformLoaded={true} reservedTour={reservedTour} isLoading={isReservedDetailsLoading} isError={isReservedDetailsError} />
    </form>
  );
};

export default CheckoutForm;
