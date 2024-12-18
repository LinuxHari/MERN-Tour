import { useParams } from "react-router-dom"
import { useCancelBookingMutation, useGetBookingQuery } from "../redux/api/baseApi"
import { useCallback } from "react"

type Params = {
    bookingId: string
}

const useAfterBookingHandler = () => {
    const { bookingId } = useParams() as Params
    const {data: booking, isLoading: isBookingLoading, isError: isBookingError} = useGetBookingQuery(bookingId)
    const [cancelBooking, {isLoading: isCancelLoading, isError: isCancelError, data: cancelData}] = useCancelBookingMutation()

    const cancel = () => useCallback(() => cancelBooking(bookingId), [])

    return {booking, isBookingError, isBookingLoading, isCancelError, isCancelLoading, cancelBooking: cancel, bookingId}
}

export default useAfterBookingHandler;