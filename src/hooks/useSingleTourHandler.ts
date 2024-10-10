import { useNavigate, useParams, useSearchParams } from "react-router-dom";
import { useGetTourByIdQuery } from "../redux/api/baseApi";
import { singleTourUrlParamsHandler } from "../utils/urlParamsHandler";

const useSingleTourHandler = () => {
  const [searchParams, _] = useSearchParams()
  const urlParams = Object.fromEntries(searchParams);
  const {id} = useParams()
  const navigate = useNavigate()
  const redirect = () => navigate(-1)
  const {startDate, endDate, adults, children, infants} = singleTourUrlParamsHandler({id, redirect, startDate: urlParams.startDate, endDate: urlParams.endDate, adults: urlParams.adults, children: urlParams.children, infants: urlParams.infants})
  const {data, isLoading} = useGetTourByIdQuery({id: id as string, startDate, endDate, adults, children, infants})

  return ({
    data, isLoading
  }
  )
}

export default useSingleTourHandler