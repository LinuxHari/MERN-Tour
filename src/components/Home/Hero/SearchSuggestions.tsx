import {forwardRef} from "react";
import useSearchSuggestionHandler from "../../../hooks/Tours/useSearchSuggestionHandler";
import Input from "../../Shared/Input/Input";
import Select2 from "../../Shared/Select/Select2";
import SearchSkeleton from "../../Skeletons/SearchSkeleton";
import SearchOption from "./SearchOption";

const SearchSuggestions = forwardRef<HTMLDivElement>((_, ref) => {
  const {suggestions, searchText, setSearchText, isFetching, inputRef, selectedPlace, selectedTour, handleSelection} =
    useSearchSuggestionHandler();

  return (
    <Select2 onSelect={handleSelection} onContentShowing={() => inputRef.current?.focus()}>
      <Select2.Button>
        <div className="searchFormItem__icon size-50 rounded-12 border-1 flex-center">
          <i className="text-20 icon-pin" />
        </div>
        <div className="searchFormItem__content" ref={ref}>
          <h5>Where</h5>
          <p className="js-select-control-chosen">{selectedTour || selectedPlace || "Search destinations"}</p>
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
          <SearchSkeleton />
        ) : (
          <>
            {suggestions.tours.map(({destination, tourId, name, image, minAge}) => (
              <Select2.Option value={destination + "|" + name + "|" + tourId + "|" + minAge + "|" + image} key={tourId}>
                <SearchOption
                  type="tour"
                  destination={destination}
                  id={tourId}
                  name={name}
                  image={image}
                  minAge={minAge}
                />
              </Select2.Option>
            ))}
            {suggestions.destinations.map(({destination, destinationId, destinationType}) => (
              <Select2.Option
                value={destination + "|" + destinationId + "|" + destinationType}
                key={destinationId}
                className="h-50"
              >
                <SearchOption
                  type="destination"
                  id={destinationId}
                  destination={destination}
                  destinationType={destinationType}
                />
              </Select2.Option>
            ))}
            {/* <div className="mt-2" /> */}

            {/* {searchText.length < 2 &&
              recentSearches?.map((data) =>
                data.type === "destination" ? (
                  <Select2.Option
                    value={data.destination + "|" + data.id + "|" + data.destinationType}
                    key={data.id}
                    className="h-50"
                  >
                    <SearchOption
                      type="destination"
                      id={data.id}
                      destination={data.destination}
                      destinationType={data.destinationType}
                    />
                  </Select2.Option>
                ) : (
                  <Select2.Option
                    value={data.destination + "|" + data.name + "|" + data.id + "|" + data.minAge}
                    key={data.id}
                  >
                    <SearchOption
                      type="tour"
                      destination={data.destination}
                      id={data.id}
                      name={data.name}
                      image={data.image}
                      minAge={data.minAge}
                    />
                  </Select2.Option>
                ),
              )} */}
          </>
        )}
      </Select2.Menu>
    </Select2>
  );
});

SearchSuggestions.displayName = "SearchSuggestions";

export default SearchSuggestions;
