import {useForm} from "react-hook-form";
import {useParams} from "react-router-dom";
import {useEffect} from "react";
import toast from "react-hot-toast";
import {zodResolver} from "@hookform/resolvers/zod";
import {PaymentElement, useElements, useStripe} from "@stripe/react-stripe-js";
import BookingSchema, {BookingSchemaType} from "../../schema/bookingSchema";
import useBookingHandler from "../../hooks/useBookingHandler";
import useUserHandler from "../../hooks/useUserHandler";
import {UserInfoResponse} from "../../type";
import {getFormErrorMessages} from "../../utils/getFormErrorMessages";
import BookingFormSkeleton from "../Skeletons/BookingFormSkeleton";
import CheckoutModal from "./CheckoutModal";
import BookingDetailsCard from "./BookingDetailsCard";
import TravellerInfoForm from "./TravellerInfoForm";

const CheckoutForm = () => {
  const {user: userData} = useUserHandler();
  const user = userData as UserInfoResponse;
  const defaultValues: Partial<BookingSchemaType> = {
    fullName: user.firstName + user.lastName,
    country: user.country,
    phone: user.phone,
    email: user.email,
    countryCode: user.countryCode,
  };
  const {
    register,
    handleSubmit,
    formState: {errors},
    setValue,
  } = useForm<BookingSchemaType>({
    resolver: zodResolver(BookingSchema),
    defaultValues,
  });
  const {
    book,
    reservedTour,
    isReservedDetailsError,
    isReservedDetailsLoading,
    isBookingLoading,
    modalInfo,
    onTimeout,
  } = useBookingHandler();
  const stripe = useStripe();
  const elements = useElements();
  const {reserveId} = useParams();

  useEffect(() => {
    if (Object.keys(errors).length) {
      const {errorMessages} = getFormErrorMessages(errors);

      toast.error(errorMessages[0]);
    }
  }, [errors]);

  if (isReservedDetailsLoading) return <BookingFormSkeleton />;

  if (!reservedTour) return <></>;

  return (
    <form
      className="row d-flex"
      onSubmit={handleSubmit((data) =>
        book({...data, id: reserveId as string}, stripe, elements),
      )}
      noValidate
    >
      <div className="col-lg-8 order-lg-1 bg-white px-4 py-4 rounded-12">
        <TravellerInfoForm
          register={register}
          setValue={setValue}
          expiresAt={reservedTour.expiresAt}
          onTimeout={onTimeout}
        />
        <PaymentElement className="my-5" />
      </div>
      <BookingDetailsCard
        isPayformLoaded={true}
        reservedTour={reservedTour}
        isLoading={isBookingLoading}
        isError={isReservedDetailsError}
      />
      {modalInfo && (
        <CheckoutModal
          showModal={Boolean(modalInfo)}
          onClose={modalInfo.onClose}
          title={modalInfo.title}
          content={modalInfo.content}
          closeText={modalInfo.closeText}
        />
      )}
    </form>
  );
};

export default CheckoutForm;
