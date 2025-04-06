import {useParams} from "react-router-dom";
import {useCallback} from "react";
import toast from "react-hot-toast";
import {FetchBaseQueryError} from "@reduxjs/toolkit/query";
import {useCancelBookingMutation, useGetBookingQuery} from "../../redux/api/baseApi";

type Params = {
  bookingId: string;
};

const useAfterBookingHandler = () => {
  const {bookingId} = useParams() as Params;
  const {data: booking, isLoading: isBookingLoading, isError: isBookingError} = useGetBookingQuery(bookingId);
  const [cancelBooking, {isLoading: isCancelLoading}] = useCancelBookingMutation();

  const cancel = useCallback(async () => {
    const toastId = toast.loading("Cancelling booking");
    const {error} = await cancelBooking(bookingId);

    if (error) {
      const cancelError = error as FetchBaseQueryError;

      if (cancelError.status === 409) return toast.error("Past booking cannot be cancelled", {id: toastId});

      return toast.error("Failed to cancel booking", {id: toastId});
    }
    toast.success("Booking cancelled successfully", {id: toastId});
  }, []);

  return {
    booking,
    isBookingError,
    isBookingLoading,
    isCancelLoading,
    cancelBooking: cancel,
    bookingId,
  };
};

export default useAfterBookingHandler;
