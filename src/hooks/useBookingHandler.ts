import { useCallback, useState } from "react"
import { useBookTourMutation, useGetReservedTourQuery, useReserveTourMutation } from "../redux/api/baseApi"
import { BookingBody, ReserveBody } from "../type"
import toast from "react-hot-toast"
import useAfterEffect from "./useAfterEffect"
import { useNavigate, useParams } from "react-router-dom"
import {Stripe, StripeElements} from "@stripe/stripe-js"
import { FetchBaseQueryError } from "@reduxjs/toolkit/query"

type Params = {
  reserveId: string;
};

const useBookingHandler = () => {
  const { reserveId } = useParams() as Params;
  const [reserveTour, { isLoading, isError, isSuccess, data }] = useReserveTourMutation()
  const { data: reservedTour, isLoading: isReservedDetailsLoading, isError: isReservedDetailsError } = useGetReservedTourQuery(reserveId, {skip: !reserveId});
  const [bookTour, { isLoading: isBookingLoading, isError: isBookingError, isSuccess: isBookingSuccess }] = useBookTourMutation()
  const navigate = useNavigate()
  const [toastId, setToastId] = useState<string | null>(null)
  const [isTimeout, setTimeoutStatus] = useState(false)

  const goHome = () => navigate("/")

  const modalConfig = {
    failed: {
      title: "Booking Failed",
      content: "Booking has failed, try booking another tour.",
      closeText: "Go to home",
      onClose:() => goHome
  },
    timeout: {
    title: "Reservation Expired",
    content: "Reservation has exipired, try booking again.",
    closeText: "Go to home",
    onClose: () => goHome
  },
    gone: {
      title: "Reservation Expired",
      content: "Reservation has exipired, try booking another tour.",
      closeText: "Go to home",
      onClose: () => goHome
  }
  } as const

  const [modalInfo, setModalInfo] = useState<typeof modalConfig["failed"] | typeof modalConfig["gone"] | typeof modalConfig["timeout"] | null>(null)

  const reserve = useCallback(async (data: ReserveBody) => {
    const toastId = toast.loading("Reserving tour")
    setToastId(toastId)
    await reserveTour(data)
  }, [])

  const book = useCallback(
    async (data: BookingBody, stripe: Stripe | null, elements: StripeElements | null) => {
      const toastId = toast.loading("Reserving tour")
      if (!stripe || !elements) {
        toast.error("Payment is not submitted", {id: toastId})
        return;
      }
      const {error: submitError} = await elements.submit()
      if(submitError)
        return toast.error("Invalid card details", {id: toastId}) // Have to manage booking data and card error handling in frontend and test, have to also manage payment history with attempts
      const {data: bookingData, error: bookingError} = await bookTour(data)
      const bookError = bookingError as FetchBaseQueryError
      if(bookError){
        if(bookError.status === 429)
          setModalInfo(modalConfig["failed"])
        else if(bookError.status === 410)
          setModalInfo(modalConfig["gone"])
        else 
          toast.error("Something went wrong", {id: toastId})
      }
      const { error } = await stripe.confirmPayment({
        clientSecret: bookingData?.clientSecret || "",
        elements,
        confirmParams: {
          return_url: `${window.location.origin}/booking/${bookingData?.bookingId}`,
        },
      });
      if(error)
       return toast.error("Payment failed, try different card")
      toast.success("Tour booked successfully", {id: toastId})
    },[])

  const onTimeout = useCallback(() => setTimeoutStatus(true), [])

  useAfterEffect(() => {
    if(isTimeout)
      setModalInfo(modalConfig["timeout"])
  }, [isTimeout])

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

  return { reserve, isLoading, book, reservedTour, isReservedDetailsLoading, isReservedDetailsError, isBookingLoading, modalInfo, onTimeout }
}

export default useBookingHandler