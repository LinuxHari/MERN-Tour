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
      place: { name, type },
      tourType,
    } = formData;
    reset()
    navigate({
      pathname: "/tours",
      search: createSearchParams({
        destination: name,
        destinationType: type,
        tourType,
        startDate: startDate.toISOString().split("T")[0],
        endDate: endDate.toISOString().split("T")[0],
        adults: "1",
        children:"0",
        infants: "0",
        teens: "0",
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
