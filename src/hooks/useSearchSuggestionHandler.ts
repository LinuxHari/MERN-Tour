import {useRef, useState} from "react";
import {useGetSearchSuggestionsByTextQuery} from "../redux/api/baseApi";
import {SEARCH_SUGGESTIONS} from "../data";
import useDebounce from "./useDebounce";

const useSearchSuggestionHandler = () => {
  const [searchText, setSearchText] = useState("");
  const debouncedSearchText = useDebounce(searchText.trim(), 500);
  const isValidStr = Boolean(debouncedSearchText);
  const {data, isFetching} = useGetSearchSuggestionsByTextQuery(
    debouncedSearchText as string,
    {
      skip: !isValidStr,
    },
  );
  const inputRef = useRef<HTMLInputElement>(null);

  const suggestions =
    isValidStr && data && !isFetching ? data : SEARCH_SUGGESTIONS;

  // if (showDropdown) {
  //   setTimeout(() => {
  //     if (inputRef.current) {
  //       inputRef.current.focus();
  //     }
  //   }, 100); // Added timeout to ensure that focus executed once animation and rendering are ended
  // }

  return {suggestions, searchText, setSearchText, isFetching, inputRef};
};

export default useSearchSuggestionHandler;
