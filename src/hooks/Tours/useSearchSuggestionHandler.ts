import {useRef, useState} from "react";
import {useFormContext} from "react-hook-form";
import {useGetSearchSuggestionsByTextQuery} from "../../redux/api/baseApi";
import {SEARCH_SUGGESTIONS} from "../../data";
import useDebounce from "../Shared/useDebounce";
import useLocalStorage from "../Shared/useLocalStorage";
import {DestinationSearch, SearchOptionType, TourSearch} from "../../type";

const useSearchSuggestionHandler = () => {
  const [searchText, setSearchText] = useState("");
  const debouncedSearchText = useDebounce(searchText.trim(), 500);
  const isValidQuery = !!debouncedSearchText;

  const {data: fetchedSuggestions, isFetching} = useGetSearchSuggestionsByTextQuery(debouncedSearchText as string, {
    skip: !isValidQuery,
  });

  const {reset, watch} = useFormContext();
  const {name: selectedPlace, tour: selectedTour, dateRange, pax, tourType} = watch();

  const inputRef = useRef<HTMLInputElement>(null);
  const [recentSearches, setRecentSearches] = useLocalStorage<SearchOptionType[]>("recent-searches");

  const recentDestinations = (recentSearches || []).filter(
    (item): item is DestinationSearch => item.type === "destination",
  );

  const recentTours = (recentSearches || []).filter((item): item is TourSearch => item.type === "tour");

  const defaultDestinations = recentDestinations.map((item) => ({
    destinationType: item.destinationType,
    destination: item.destination,
    destinationId: item.id,
  }));

  const defaultTours = recentTours.map((item) => ({
    type: "tour" as const,
    destination: item.destination,
    name: item.name,
    tourId: item.id,
    minAge: item.minAge,
    image: item.image,
  }));

  const filteredDestinations = new Map(
    [...defaultDestinations, ...SEARCH_SUGGESTIONS.slice(recentSearches?.length || 0)].map((item) => [
      item.destinationId,
      item,
    ]),
  ).values();

  const suggestions =
    isValidQuery && fetchedSuggestions && !isFetching
      ? fetchedSuggestions
      : {
          destinations: Array.from(filteredDestinations),
          tours: defaultTours,
        };

  const handleSelection = (value: string) => {
    const searchValues = value.split("|");
    let selected: SearchOptionType | null = null;

    if (searchValues.length === 3) {
      const [destination, destinationId, destinationType] = searchValues;

      selected = {
        type: "destination",
        destination,
        id: destinationId,
        destinationType,
      };
      reset(
        {id: destinationId, name: destination, tour: "", minAge: 0, dateRange, pax, tourType},
        {keepDirty: true, keepTouched: true, keepErrors: true},
      );
    } else {
      const [destination, name, id, minAge, image] = searchValues;

      selected = {
        type: "tour",
        destination,
        name,
        id,
        minAge: parseInt(minAge),
        image,
      };

      reset(
        {id, name, pax, tour: name, minAge: parseInt(minAge), tourType: "", dateRange},
        {keepDirty: true, keepTouched: true, keepErrors: true},
      );
    }

    if (selected) {
      const filtered =
        recentSearches?.filter((item) =>
          item.type === "destination"
            ? !(item.destination === selected.destination && item.destination === selected.destination)
            : item.destination !== selected.destination,
        ) || [];

      setRecentSearches([selected, ...filtered].slice(0, 2));
    }
  };

  return {
    suggestions,
    searchText,
    setSearchText,
    isFetching,
    inputRef,
    selectedPlace,
    selectedTour,
    handleSelection,
  };
};

export default useSearchSuggestionHandler;
