import { useState } from "react"
import { useReserveTourMutation } from "../redux/api/baseApi"
import { ReserveBody } from "../type"
import toast from "react-hot-toast"
import useAfterEffect from "./useAfterEffect"
import { useNavigate } from "react-router-dom"
import { useElements, useStripe } from "@stripe/react-stripe-js"
import { BookingSchemaType } from "../schema/bookingSchema"

const useBookingHandler = () => {
  const [reserveTour, { isLoading, isError, isSuccess, data }] = useReserveTourMutation()
  const [toastId, setToastId] = useState<string | null>(null)
  const navigate = useNavigate()
  const stripe = useStripe();
  const elements = useElements();

  const reserve = async (data: ReserveBody) => {
    const toastId = toast.loading("Reserving tour")
    setToastId(toastId)
    await reserveTour(data)
  }

  const book = async (data: BookingSchemaType) => {
    if (!stripe || !elements) {
      toast.error("Payment is not submitted")
      return;
    }
    const { error } = await stripe.confirmPayment({
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

  return {reserve, isLoading, book, isPayformLoaded: !stripe || !elements}
}

export default useBookingHandler