import {FormProvider} from "react-hook-form";
import Button from "../../Shared/Button/Button";
import {SearchSchemaType} from "../../../schema/searchSchema";
import useSearchHandler from "../../../hooks/Others/useSearchHandler";
import SearchDatePicker from "./SearchDatePicker";
import SearchSuggestions from "./SearchSuggestions";
import TourType from "./TourType";
import SearchPax from "./SearchPax";

type SearchFormProps = {isModify?: false; formData?: never} | {isModify: true; formData: SearchSchemaType};

const SearchForm = ({isModify = false, formData}: SearchFormProps) => {
  const {handleFormScroll, handleSearch, form, disableTourType, handleSubmit, searchRef, dateRef, tourTypeRef} =
    useSearchHandler(isModify, formData);

  const minAge = form.watch("minAge");

  return (
    <FormProvider {...form}>
      <form className="searchForm -type-1 is-in-view" onSubmit={handleSubmit(handleSearch)}>
        <div className="searchForm__form" role="presentation" onClick={handleFormScroll}>
          <SearchSuggestions ref={searchRef} />
          <SearchDatePicker ref={dateRef} />
          <div style={disableTourType ? {pointerEvents: "none", opacity: 0.4} : {}}>
            <TourType ref={tourTypeRef} />
          </div>
          <SearchPax minAge={minAge} />
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
