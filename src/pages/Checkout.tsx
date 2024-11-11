import { Resolver, useForm } from "react-hook-form";
import BookingDetailsCard from "../components/BookingSubmission/BookingDetailsCard";
import PaymentForm from "../components/BookingSubmission/PaymentForm";
import TravellerInfoForm from "../components/BookingSubmission/TravellerInfoForm";
import { zodResolver } from "@hookform/resolvers/zod";
import BookingSchema, { BookingSchemaType } from "../schema/bookingSchema";

const Checkout = () => {

  const { register, handleSubmit, formState: { errors } } = useForm<BookingSchemaType>({ resolver: zodResolver(BookingSchema) });
  return (
   <main className="bg-light-1">
     <section className="layout-pt-md layout-pb-lg mt-header">
      <div className="container">
        <form className="row" >
          <div className="col-lg-8">
            <TravellerInfoForm/>
            <PaymentForm/>
          </div>
          <div className="col-lg-4">
          <BookingDetailsCard/>
          </div>
        </form>
      </div>
    </section>
   </main>
  );
};

export default Checkout;
