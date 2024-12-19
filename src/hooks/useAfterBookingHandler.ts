import { useParams } from "react-router-dom"
import { useCancelBookingMutation, useGetBookingQuery } from "../redux/api/baseApi"
import { useCallback, useState } from "react"
import toast from "react-hot-toast"
import useAfterEffect from "./useAfterEffect"

type Params = {
    bookingId: string
}

const useAfterBookingHandler = () => {
    const { bookingId } = useParams() as Params
    const {data: booking, isLoading: isBookingLoading, isError: isBookingError} = useGetBookingQuery(bookingId)
    const [cancelBooking, {isLoading: isCancelLoading, isError: isCancelError, isSuccess: isCancelSuccess}] = useCancelBookingMutation()
    const [toastId, setToastId] = useState<string | null>(null)

    const cancel = () => useCallback(async() => {
        const toastId = toast.loading("Cancelling booking");
        setToastId(toastId)
        await cancelBooking(bookingId)
    }, [])

    useAfterEffect(() => {
        if(!isCancelLoading && toastId){
            if(isCancelSuccess)
                toast.success("Booking cancelled successfully", {id: toastId})
            else
                toast.error("Failed to cancel booking", {id: toastId})
        }
    },[isCancelLoading, isCancelError, isCancelSuccess])

    return { booking, isBookingError, isBookingLoading, isCancelLoading, cancelBooking: cancel, bookingId }
}

export default useAfterBookingHandler;