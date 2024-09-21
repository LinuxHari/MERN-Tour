import { useRef, useState } from "react";
import useDebounce from "./useDebounce";
import { useGetSearchSuggestionsByTextQuery } from "../redux/api/baseApi";
import { SearchSuggestions } from "../type";

const useSearchSuggestionHandler = () => {

    const defaultSuggestions: SearchSuggestions = {
        city: ["Paris", "Bangkok"],
        state: ["Florida"],
        country: ["India", "France"],
      };

      const [searchText, setSearchText] = useState("");
      const debouncedSearchText = useDebounce(searchText, 500);
      const isValidStr = Boolean(debouncedSearchText);
      const { data, isFetching } = useGetSearchSuggestionsByTextQuery(debouncedSearchText as string, { skip: !isValidStr });
      const inputRef = useRef<HTMLInputElement>(null)

      const suggestions = isValidStr && data && !isFetching ? data : defaultSuggestions;

      // if (showDropdown) {
      //   setTimeout(() => {
      //     if (inputRef.current) {
      //       inputRef.current.focus();
      //     }
      //   }, 100); // Added timeout to ensure that focus executed once animation and rendering are ended
      // }
      
    
  return ({suggestions, searchText, setSearchText, isFetching, inputRef})
}

export default useSearchSuggestionHandler