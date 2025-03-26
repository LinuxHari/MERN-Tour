import {useCallback, useState} from "react";
import toast from "react-hot-toast";
import {useNavigate, useParams} from "react-router-dom";
import {Stripe, StripeElements} from "@stripe/stripe-js";
import {FetchBaseQueryError} from "@reduxjs/toolkit/query";
import {useBookTourMutation, useGetReservedTourQuery, useReserveTourMutation} from "../../redux/api/baseApi";
import {BookingBody, ReserveBody} from "../../redux/api/type";

type Params = {
  reserveId: string;
};

type ReserveParams = ReserveBody & {
  onError: () => void;
};

const useBookingHandler = () => {
  const {reserveId} = useParams() as Params;
  const [reserveTour, {isLoading}] = useReserveTourMutation();
  const {
    data: reservedTour,
    isLoading: isReservedDetailsLoading,
    isError: isReservedDetailsError,
  } = useGetReservedTourQuery(reserveId, {skip: !reserveId});
  const [bookTour, {isLoading: isBookingLoading}] = useBookTourMutation();
  const navigate = useNavigate();

  const goHome = () => navigate("/");

  const modalConfig = {
    failed: {
      title: "Booking Failed",
      content: "Booking has failed, try booking another tour.",
      closeText: "Go to home",
      onSubmit: goHome,
    },
    timeout: {
      title: "Reservation Expired",
      content: "Reservation has exipired, try booking again.",
      closeText: "Go to home",
      onSubmit: goHome,
    },
    gone: {
      title: "Reservation Expired",
      content: "Reservation has exipired, try booking another tour.",
      closeText: "Go to home",
      onSubmit: goHome,
    },
  } as const;

  const [modalInfo, setModalInfo] = useState<
    (typeof modalConfig)["failed"] | (typeof modalConfig)["gone"] | (typeof modalConfig)["timeout"] | null
  >(null);

  const reserve = useCallback(async ({onError, ...data}: ReserveParams) => {
    const toastId = toast.loading("Reserving tour");
    const pax: ReserveBody["pax"] = {adults: data.pax.adults};

    Object.entries(data.pax).forEach(([key, value]) => {
      if (value)
        // Removing passenger types with 0 as value
        pax[key as keyof typeof pax] = value;
    });
    const {error, data: reserveData} = await reserveTour({...data, pax});

    if (error) {
      const reserveError = error as FetchBaseQueryError;

      if (reserveError.status === 409) return onError();

      return toast.error("Failed to reserve tour", {id: toastId});
    }
    toast.success("Tour reserved successfully!", {id: toastId});
    navigate(`/checkout/${reserveData.reserveId}`);
  }, []);

  const book = useCallback(async (data: BookingBody, stripe: Stripe | null, elements: StripeElements | null) => {
    const toastId = toast.loading("Reserving tour");

    if (!stripe || !elements) return toast.error("Payment is not submitted", {id: toastId});

    const {error: submitError} = await elements.submit();

    if (submitError) return toast.error("Invalid card details", {id: toastId});

    const {data: bookingData, error: bookingError} = await bookTour(data);
    const bookError = bookingError as FetchBaseQueryError;

    if (bookError) {
      if (bookError.status === 429) setModalInfo(modalConfig["failed"]);
      else if (bookError.status === 410) setModalInfo(modalConfig["gone"]);
      else return toast.error("Something went wrong", {id: toastId});
    }

    const {error} = await stripe.confirmPayment({
      clientSecret: bookingData?.clientSecret || "",
      elements,
      confirmParams: {
        return_url: `${window.location.origin}/booking/${bookingData?.bookingId}`,
      },
    });

    if (error) return toast.error("Payment failed, try different card");
    toast.success("Tour booked successfully", {id: toastId});
  }, []);

  const onTimeout = useCallback(() => setModalInfo(modalConfig["timeout"]), []);

  const handleModalClose = () => setModalInfo(null);

  return {
    reserve,
    isLoading,
    book,
    reservedTour,
    isReservedDetailsLoading,
    isReservedDetailsError,
    isBookingLoading,
    modalInfo,
    onTimeout,
    onClose: handleModalClose,
  };
};

export default useBookingHandler;
