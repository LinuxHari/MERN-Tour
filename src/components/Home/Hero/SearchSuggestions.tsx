import { useFormContext } from "react-hook-form";
import useSearchSuggestionHandler from "../../../hooks/useSearchSuggestionHandler";
import Input from "../../Shared/Input/Input";
import Select2 from "../../Shared/Select/Select2";

const SearchSuggestions = () => {
  const { suggestions, searchText, setSearchText, isFetching, inputRef } = useSearchSuggestionHandler();
  const { watch, setValue } = useFormContext();
  const selectedPlace = watch("place");

  const handleSelection = (location: string) => {
    setValue("place", { name: location, type: "state" });
  };

  return (
    <Select2 onSelect={handleSelection} onContentShowing={() => inputRef.current?.focus()}>
      <Select2.Button>
      <div className="searchFormItem__icon size-50 rounded-12 border-1 flex-center">
        <i className="text-20 icon-pin"></i>
      </div>
      <div className="searchFormItem__content">
        <h5>Where</h5>
        <p className="js-select-control-chosen">{selectedPlace?.name || "Search destinations"}</p>
        </div>
      </Select2.Button>
      <Select2.Menu>
        <Input
          type="text"
          label="Search"
          wrapperClassName="m-3"
          value={searchText}
          onChange={(e) => setSearchText(e.currentTarget.value.trim())}
          ref={inputRef}
        />
        {isFetching ? (
          <p className="d-flex py-2 js-select-control-choice">Loading...</p>
        ) : (
          Object.entries(suggestions).map(([locationType, locations]) =>
            locations.map((location) => (
              <Select2.Option value={location} key={location + locationType}>
                <span className="js-select-control-choice">{location}</span>
                <span>{locationType}</span>
              </Select2.Option>
            ))
          )
        )}
      </Select2.Menu>
    </Select2>
  );
};

export default SearchSuggestions;
