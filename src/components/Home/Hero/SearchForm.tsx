import {useEffect} from "react";
import {FormProvider, useForm} from "react-hook-form";
import toast from "react-hot-toast";
import {createSearchParams, useLocation, useNavigate} from "react-router-dom";
import {zodResolver} from "@hookform/resolvers/zod";
import Button from "../../Shared/Button/Button";
import {searchSchema, SearchSchemaType} from "../../../schema/searchSchema";
import {getFormErrorMessages} from "../../../utils/getFormErrorMessages";
import {transformToUrlName} from "../../../utils/urlNameTransformer";
import SearchDatePicker from "./SearchDatePicker";
import SearchSuggestions from "./SearchSuggestions";
import TourType from "./TourType";
import SearchPax from "./SearchPax";

type SearchForm = {
  isModify: boolean;
  formData: SearchSchemaType;
};

const SearchForm = ({isModify, formData}: SearchForm) => {
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
  } = form;

  useEffect(() => {
    if (Object.keys(errors).length) {
      const {errorMessages} = getFormErrorMessages(errors);

      toast.error(errorMessages[0]);
    }
  }, [errors]);

  const handleSearch = (formData: SearchSchemaType) => {
    const {
      dateRange: {startDate, endDate},
      destination,
      destinationId,
      tourType,
      pax: {adults, teens, children, infants},
    } = formData;
    const transformedDestination = transformToUrlName(destination);

    reset();
    navigate({
      pathname: `/tours/${transformedDestination}/${destinationId}`,
      search: createSearchParams({
        tourType,
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

    if (window.scrollY < scrolledHeight && pathname === "/")
      window.scrollBy({top: scrollHeight, behavior: "smooth"});
  };

  return (
    <FormProvider {...form}>
      <form
        className="searchForm -type-1 is-in-view"
        onSubmit={handleSubmit(handleSearch)}
      >
        <div
          className="searchForm__form"
          role="presentation"
          onClick={handleFormScroll}
        >
          <SearchSuggestions />
          <SearchDatePicker />
          <TourType />
          <SearchPax />
        </div>

        <div className="searchForm__button">
          <Button type="submit" buttonType="primary" showIcon={false}>
            <i className="icon-search text-16 mr-10" />
            Search
          </Button>
        </div>
      </form>
    </FormProvider>
  );
};

export default SearchForm;
