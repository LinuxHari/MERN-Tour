import { Resolver, useForm } from "react-hook-form";
import BookingDetailsCard from "../components/BookingSubmission/BookingDetailsCard";
import PaymentForm from "../components/BookingSubmission/PaymentForm";
import TravellerInfoForm from "../components/BookingSubmission/TravellerInfoForm";
import { zodResolver } from "@hookform/resolvers/zod";
import BookingSchema, { BookingSchemaType } from "../schema/bookingSchema";

const Checkout = () => {

  const defaultValue = {}
  const { register, handleSubmit, formState: { errors }, setValue } = useForm<BookingSchemaType>({ resolver: zodResolver(BookingSchema) });
  const submitForm = (data: BookingSchemaType) => {
    console.log(data, "data submitted")
  }

  console.log(errors, "errors")
  return (
   <main className="bg-light-1">
     <section className="layout-pt-md layout-pb-lg mt-header">
      <div className="container">
        <form className="row d-flex" onSubmit={handleSubmit(submitForm)}  noValidate>
          <div className="col-lg-8 order-lg-1">
            <TravellerInfoForm register={register} setValue={setValue}/>
            <PaymentForm/>
          </div>
          <BookingDetailsCard/>
        </form>
      </div>
    </section>
   </main>
  );
};

export default Checkout;
