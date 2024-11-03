import { useNavigate, useParams, useSearchParams } from "react-router-dom";
import { useGetTourByIdQuery } from "../redux/api/baseApi";
import { singleTourUrlParamsHandler } from "../utils/urlParamsHandler";
import { useMemo } from "react";
import { MIN_AGE } from "../config/tourConfig";

type ParamType = {id: string}

const useSingleTourHandler = () => {
  const [searchParams, _] = useSearchParams()
  const urlParams = Object.fromEntries(searchParams);
  const {id} = useParams() as ParamType 
  const navigate = useNavigate()
  const redirect = () => navigate(-1)
  const {startDate, endDate, adults, children, infants, teens} = singleTourUrlParamsHandler({id, redirect, startDate: urlParams.startDate, endDate: urlParams.endDate, adults: urlParams.adults, children: urlParams.children, infants: urlParams.infants, teens: urlParams.teens})
  const {data, isLoading} = useGetTourByIdQuery({id, startDate, endDate, adults, children, infants, teens})

  const pax = useMemo(() => {
    const tourMinAge = data?.minAge || 0
    
    switch(tourMinAge){
      case MIN_AGE.infant: 
        return {adults, infants, children, teens}
      
      case MIN_AGE.child:
        return {adults, children, teens, infants: 0}

      case MIN_AGE.teen: 
        return {adults, teens, children: 0, infants: 0}

      default: 
        return {adults, children: 0, teens: 0, infants: 0}
    }

  },[data])

  return ({
    data, isLoading, pax
  }
  )
}

export default useSingleTourHandler