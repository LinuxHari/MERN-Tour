import {useMemo} from "react";
import {useNavigate, useParams, useSearchParams} from "react-router-dom";
import {useGetTourByIdQuery} from "../redux/api/baseApi";
import {singleTourUrlParamsHandler} from "../utils/urlParamsHandler";
import {MIN_AGE} from "../config/tourConfig";

type ParamType = {destination: string; tourName: string; tourId: string};

const useSingleTourHandler = () => {
  const [searchParams, _] = useSearchParams();
  const urlParams = Object.fromEntries(searchParams);
  const {destination, tourId} = useParams() as ParamType;
  const navigate = useNavigate();
  const redirect = () => navigate(-1);
  const {startDate, endDate, adults, children, infants, teens} = singleTourUrlParamsHandler({
    id: tourId,
    redirect,
    startDate: urlParams.startDate,
    endDate: urlParams.endDate,
    adults: urlParams.adults,
    children: urlParams.children,
    infants: urlParams.infants,
    teens: urlParams.teens,
    tourId,
    destination,
  });
  const {data, isLoading} = useGetTourByIdQuery({
    id: tourId,
    startDate,
    endDate,
    adults,
    children,
    infants,
    teens,
  });

  const pax = useMemo(() => {
    const tourMinAge = data?.minAge || 0;

    switch (tourMinAge) {
      case MIN_AGE.infant:
        return {adults, infants, children, teens};

      case MIN_AGE.child:
        return {adults, children, teens, infants: 0};

      case MIN_AGE.teen:
        return {adults, teens, children: 0, infants: 0};

      default:
        return {adults, children: 0, teens: 0, infants: 0};
    }
  }, [data]);

  return {
    data,
    isLoading,
    pax,
    startDate,
    endDate,
    tourId,
  };
};

export default useSingleTourHandler;
