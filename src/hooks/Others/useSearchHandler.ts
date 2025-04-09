import {useEffect, useRef} from "react";
import {useForm} from "react-hook-form";
import toast from "react-hot-toast";
import {createSearchParams, useLocation, useNavigate} from "react-router-dom";
import {zodResolver} from "@hookform/resolvers/zod";
import {searchSchema, SearchSchemaType} from "../../schema/searchSchema";
import {transformToUrlName} from "../../utils/urlNameTransformer";
import {getFormErrorMessages} from "../../utils/getFormErrorMessages";

const useSearchHandler = (isModify: boolean, formData?: SearchSchemaType) => {
  const form = useForm<SearchSchemaType>({
    resolver: zodResolver(searchSchema),
    defaultValues: isModify ? formData : {},
  });
  const navigate = useNavigate();
  const {pathname} = useLocation();
  const {
    formState: {errors},
    handleSubmit,
    reset,
    watch,
  } = form;

  const searchRef = useRef<HTMLDivElement>(null);
  const dateRef = useRef<HTMLDivElement>(null);
  const tourTypeRef = useRef<HTMLDivElement>(null);

  const handleSearch = (formData: SearchSchemaType) => {
    const {
      dateRange: {startDate, endDate},
      name,
      id,
      tour,
      tourType,
      pax: {adults, teens, children, infants},
    } = formData;
    const transformedDestination = transformToUrlName(name);

    reset();

    if (tour && !tourType) {
      const transformedTourName = transformToUrlName(tour);

      return navigate({
        pathname: `/tours/${transformedDestination}/${transformedTourName}/${id}`,
        search: createSearchParams({
          startDate: startDate.toISOString().split("T")[0],
          endDate: endDate.toISOString().split("T")[0],
          adults: String(adults),
          children: String(children),
          infants: String(infants),
          teens: String(teens),
        }).toString(),
      });
    }

    navigate({
      pathname: `/tours/${transformedDestination}/${id}`,
      search: createSearchParams({
        tourType: tourType as string,
        startDate: startDate.toISOString().split("T")[0],
        endDate: endDate.toISOString().split("T")[0],
        adults: String(adults),
        children: String(children),
        infants: String(infants),
        teens: String(teens),
      }).toString(),
    });
  };

  const handleFormScroll = () => {
    const isMobile = window.innerWidth < 992;
    const scrollHeight = isMobile ? 350 : 125;
    const scrolledHeight = isMobile ? 150 : 100;

    if (window.scrollY < scrolledHeight && pathname === "/") window.scrollBy({top: scrollHeight, behavior: "smooth"});
  };

  const tourValue = watch("tour");

  useEffect(() => {
    if (isModify && formData) {
      reset(formData);
    }
  }, [formData]);

  useEffect(() => {
    if (Object.keys(errors).length) {
      const {errorMessages} = getFormErrorMessages(errors);

      if (errorMessages[0].toLowerCase().includes("destination")) searchRef.current?.click();
      else if (errorMessages[0].toLowerCase().includes("dates")) dateRef.current?.click();
      else if (errorMessages[0].toLowerCase().includes("tour type")) tourTypeRef.current?.click();

      toast.error(errorMessages[0]);
    }
  }, [errors]);

  return {
    disableTourType: Boolean(tourValue),
    handleFormScroll,
    handleSearch,
    form,
    handleSubmit,
    searchRef,
    dateRef,
    tourTypeRef,
  };
};

export default useSearchHandler;
