import { useParams } from "react-router-dom";
import { useCancelBookingMutation, useGetBookingQuery } from "../redux/api/baseApi";
import { useCallback } from "react";
import toast from "react-hot-toast";

type Params = {
  bookingId: string;
};

const useAfterBookingHandler = () => {
  const { bookingId } = useParams() as Params;
  const { data: booking, isLoading: isBookingLoading, isError: isBookingError } = useGetBookingQuery(bookingId);
  const [cancelBooking, { isLoading: isCancelLoading }] = useCancelBookingMutation();

  const cancel = () =>
    useCallback(async () => {
      const toastId = toast.loading("Cancelling booking");
      const { error } = await cancelBooking(bookingId);
      if (error) return toast.error("Failed to cancel booking", { id: toastId });
      toast.success("Booking cancelled successfully", { id: toastId });
    }, []);

  return { booking, isBookingError, isBookingLoading, isCancelLoading, cancelBooking: cancel, bookingId };
};

export default useAfterBookingHandler;
