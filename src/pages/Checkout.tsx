import { useForm } from "react-hook-form";
import BookingDetailsCard from "../components/BookingSubmission/BookingDetailsCard";
import TravellerInfoForm from "../components/BookingSubmission/TravellerInfoForm";
import { zodResolver } from "@hookform/resolvers/zod";
import BookingSchema, { BookingSchemaType } from "../schema/bookingSchema";
import useBookingHandler from "../hooks/useBookingHandler";
import PaymentForm from "../components/Shared/Forms/PaymentForm";

const Checkout = () => {

  const defaultValue = {}
  const { register, handleSubmit, formState: { errors }, setValue } = useForm<BookingSchemaType>({ resolver: zodResolver(BookingSchema) });
  const { book, isPayformLoaded } = useBookingHandler()

  console.log(errors, "errors")
  return (
   <main className="bg-light-1">
     <section className="layout-pt-md layout-pb-lg mt-header">
      <div className="container">
        <form className="row d-flex" onSubmit={handleSubmit(book)}  noValidate>
          <div className="col-lg-8 order-lg-1">
            <TravellerInfoForm register={register} setValue={setValue}/>
            <PaymentForm clientSecret="12566"/>
          </div>
          <BookingDetailsCard isPayformLoaded={isPayformLoaded}/>
        </form>
      </div>
    </section>
   </main>
  );
};

export default Checkout;
