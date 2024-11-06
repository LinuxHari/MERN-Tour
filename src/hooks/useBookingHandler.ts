import { useState } from "react"
import { useReserveTourMutation } from "../redux/api/baseApi"
import { ReserveBody } from "../type"
import toast from "react-hot-toast"
import useAfterEffect from "./useAfterEffect"
import { useNavigate } from "react-router-dom"

const useBookingHandler = () => {
  const [reserveTour, { isLoading, isError, isSuccess, data }] = useReserveTourMutation()
  const [toastId, setToastId] = useState<string | null>(null)
  const navigate = useNavigate()

  const reserve = async (data: ReserveBody) => {
    const toastId = toast.loading("Reserving tour")
    setToastId(toastId)
    await reserveTour(data)
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

  return {reserve, isLoading}
}

export default useBookingHandler