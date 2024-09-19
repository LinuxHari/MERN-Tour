import { FormProvider, useForm } from "react-hook-form";
import Button from "../../Shared/Button/Button";
import SearchDatePicker from "./SearchDatePicker";
import SearchSuggestions from "./SearchSuggestions";
import TourType from "./TourType";
import { zodResolver } from "@hookform/resolvers/zod";
import { searchSchema, SearchSchemaType } from "../../../schema/searchSchema";

const SearchForm = () => {
  const form = useForm<SearchSchemaType>({ resolver: zodResolver(searchSchema) });
  return (
    <FormProvider {...form}>
      <form className="searchForm -type-1">
        <div className="searchForm__form">
          <SearchSuggestions />
          <SearchDatePicker />
          <TourType />
        </div>

        <div className="searchForm__button">
          <Button buttonType="primary" showIcon={false}>
            <i className="icon-search text-16 mr-10"></i>
            Search
          </Button>
        </div>
      </form>
    </FormProvider>
  );
};

export default SearchForm;
