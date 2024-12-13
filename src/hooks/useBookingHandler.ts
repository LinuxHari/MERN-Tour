import { useState } from "react"
import { useBookTourMutation, useGetReservedTourQuery, useReserveTourMutation } from "../redux/api/baseApi"
import { BookingBody, ReserveBody } from "../type"
import toast from "react-hot-toast"
import useAfterEffect from "./useAfterEffect"
import { useNavigate, useParams } from "react-router-dom"
import {Stripe, StripeElements} from "@stripe/stripe-js"

type Params = {
  reserveId: string;
};

const useBookingHandler = () => {
  const { reserveId } = useParams() as Params;
  const [reserveTour, { isLoading, isError, isSuccess, data }] = useReserveTourMutation()
  const { data: reservedTour, isLoading: isReservedDetailsLoading, isError: isReservedDetailsError } = useGetReservedTourQuery(reserveId, {skip: !reserveId});
  const [bookTour, { isLoading: isBookingLoading, isError: isBookingError, isSuccess: isBookingSuccess }] = useBookTourMutation()
  const [toastId, setToastId] = useState<string | null>(null)
  const modalConfig = {
    failed: {
      title: "Booking Failed",
      content: "Booking has failed, try booking another tour.",
      closeText: "Go to home"
  },
    retry: {
      title: "Card Failed",
      content: "Try booking again with different card!",
      closeText: "Try again"
  },
    gone: {
      title: "Reservation Expired",
      content: "Reservation has exipired, try booking another tour.",
      closeText: "Go to home"
  }
  }
  
  const navigate = useNavigate()

  const reserve = async (data: ReserveBody) => {
    const toastId = toast.loading("Reserving tour")
    setToastId(toastId)
    await reserveTour(data)
  }

  const book = async (data: BookingBody, stripe: Stripe | null, elements: StripeElements | null) => {
    if (!stripe || !elements) {
      toast.error("Payment is not submitted")
      return;
    }
    const {error: submitError} = await elements.submit()
    if(submitError)
      return toast.error("Invalid card details") // Have to manage booking data and card error handling in frontend and test, have to also manage payment history with attempts
    const {data: bookingData} = await bookTour(data)
    const { error } = await stripe.confirmPayment({
      clientSecret: bookingData?.clientSecret || "",
      elements,
      confirmParams: {
        return_url: `${window.location.origin}/success/${bookingData?.bookingId}`,
      },
    });
    if(error)
     return toast.error("Payment failed, try different card")
  }

  useAfterEffect(() => {
    if(!isLoading && !isBookingLoading && toastId){
      if((isError && !isSuccess) || (isBookingError && !isBookingSuccess)){
        if(isError || !isSuccess)
          toast.error('Failed to reserve tour', { id: toastId });
        else 
          toast.error('Failed to book tour', { id: toastId });
      } else {
        if(isSuccess){
          toast.success('Tour reserved successfully!', { id: toastId });
          navigate(`/checkout/${data.reserveId}`)
        } 
        // else {
        //   toast.success('Tour booked successfully!', { id: toastId });
        //   navigate(`/success/${bookingData?.bookingId}`)
        // }
      }
     }
  },[isLoading, isError, isSuccess, isBookingError, isBookingLoading, isBookingSuccess])

  return {reserve, isLoading, book, reservedTour, isReservedDetailsLoading, isReservedDetailsError }
}

export default useBookingHandler