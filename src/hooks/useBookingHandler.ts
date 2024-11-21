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
  const [bookTour, { isLoading: isBookingLoading, isError: isBookingError, isSuccess: isBookingSuccess, data: clientSecret }] = useBookTourMutation()
  const [toastId, setToastId] = useState<string | null>(null)
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
    await bookTour(data)
    const { error } = await stripe.confirmPayment({
      clientSecret: clientSecret as string,
      elements,
      confirmParams: {
        return_url: `${window.location.origin}/booking`,
      },
    });
    if(error)
      toast.error("Payment failed")
  }

  useAfterEffect(() => {
    if(!isLoading && toastId){
      if(isError || !isSuccess){
        toast.error('Failed to reserve tour', { id: toastId });
      } else {
        toast.success('Tour reserved successfully!', { id: toastId });
        navigate(`/checkout/${data.reserveId}`)
        window.scrollTo(0, 0);
      }
     }
  },[isLoading, isError, isSuccess])

  return {reserve, isLoading, book, reservedTour, isReservedDetailsLoading, isReservedDetailsError}
}

export default useBookingHandler