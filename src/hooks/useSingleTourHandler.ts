import { useNavigate, useParams, useSearchParams } from "react-router-dom";
import { useGetTourByIdQuery } from "../redux/api/baseApi";
import { singleTourUrlParamsHandler } from "../utils/urlParamsHandler";
import { useMemo } from "react";
import { minAge } from "../config/tourConfig";

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
      case minAge.infant: 
        return {adults, infants, children, teens}
      
      case minAge.child:
        return {adults, children, teens}

      case minAge.teen: 
        return {adults, teens}

      default: 
        return {adults}
    }

  },[data])

  return ({
    data, isLoading, pax
  }
  )
}

export default useSingleTourHandler