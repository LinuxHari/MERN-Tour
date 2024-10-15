import { FormProvider, useForm } from "react-hook-form";
import Button from "../../Shared/Button/Button";
import SearchDatePicker from "./SearchDatePicker";
import SearchSuggestions from "./SearchSuggestions";
import TourType from "./TourType";
import { zodResolver } from "@hookform/resolvers/zod";
import { searchSchema, SearchSchemaType } from "../../../schema/searchSchema";
import { useEffect } from "react";
import { getFormErrorMessages } from "../../../utils/getFormErrorMessages";
import toast from "react-hot-toast";
import { createSearchParams, useNavigate } from "react-router-dom";
import SearchPax from "./SearchPax";

const SearchForm = () => {
  const form = useForm<SearchSchemaType>({ resolver: zodResolver(searchSchema) });
  const navigate = useNavigate();
  const {
    formState: { errors },
    handleSubmit,
    reset
  } = form;

  useEffect(() => {
    if (Object.keys(errors).length) {
      const { errorMessages } = getFormErrorMessages(errors);
      toast.error(errorMessages[0]);
    }
  }, [errors]);

  const handleSearch = (formData: SearchSchemaType) => {
    const {
      dateRange: { startDate, endDate },
      destinationId,
      tourType,
      pax: {adults, teens, children, infants}
    } = formData;
    reset()
    navigate({
      pathname: "/tours",
      search: createSearchParams({
        destinationId,
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

  return (
    <FormProvider {...form}>
      <form className="searchForm -type-1" onSubmit={handleSubmit(handleSearch)}>
        <div className="searchForm__form">
          <SearchSuggestions />
          <SearchDatePicker />
          <TourType />
          <SearchPax />
        </div>

        <div className="searchForm__button">
          <Button type="submit" buttonType="primary" showIcon={false}>
            <i className="icon-search text-16 mr-10"></i>
            Search
          </Button>
        </div>
      </form>
    </FormProvider>
  );
};

export default SearchForm;
