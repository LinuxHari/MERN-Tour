import {useFormContext} from "react-hook-form";
import useSearchSuggestionHandler from "../../../hooks/useSearchSuggestionHandler";
import Input from "../../Shared/Input/Input";
import Select2 from "../../Shared/Select/Select2";

const SearchSuggestions = () => {
  const {suggestions, searchText, setSearchText, isFetching, inputRef} =
    useSearchSuggestionHandler();
  const {setValue, watch} = useFormContext();
  const selectedPlace = watch("destination");

  const handleSelection = (location: string) => {
    const [destinationName, _, destinationId] = location.split("-");

    setValue("destinationId", destinationId);
    setValue("destination", destinationName);
  };

  return (
    <Select2
      onSelect={handleSelection}
      onContentShowing={() => inputRef.current?.focus()}
    >
      <Select2.Button>
        <div className="searchFormItem__icon size-50 rounded-12 border-1 flex-center">
          <i className="text-20 icon-pin" />
        </div>
        <div className="searchFormItem__content">
          <h5>Where</h5>
          <p className="js-select-control-chosen">
            {selectedPlace || "Search destinations"}
          </p>
        </div>
      </Select2.Button>
      <Select2.Menu>
        <Input
          type="text"
          label="Search"
          wrapperClassName="m-3"
          value={searchText}
          onChange={(e) => setSearchText(e.currentTarget.value)}
          ref={inputRef}
        />
        {isFetching ? (
          <p className="d-flex py-2 js-select-control-choice">Loading...</p>
        ) : (
          suggestions.map(({destination, destinationId, destinationType}) => (
            <Select2.Option
              value={destination + "-" + destinationType + "-" + destinationId}
              key={destinationId}
            >
              <span className="js-select-control-choice">{destination}</span>
              <span>{destinationType}</span>
            </Select2.Option>
          ))
        )}
      </Select2.Menu>
    </Select2>
  );
};

export default SearchSuggestions;
