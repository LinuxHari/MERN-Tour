const SearchSuggestions = () => {
  const suggestions = [
    { place: "Europe", category: "Continent" },
    { place: "France", category: "Country" },
    { place: "London", category: "Destination" },
    { place: "Asia", category: "Continent" },
    { place: "United States", category: "Country" },
    { place: "Tokyo", category: "Destination" },
    { place: "Africa", category: "Continent" },
    { place: "New Zealand", category: "Country" },
  ];

  return (
    <div
      className="searchFormItemDropdown -location"
      data-x="location"
      data-x-toggle="is-active"
    >
      <div className="searchFormItemDropdown__container">
        <div className="searchFormItemDropdown__list sroll-bar-1">
          {suggestions.map((suggestion, index) => (
            <div className="searchFormItemDropdown__item" key={index}>
              <button className="js-select-control-button">
                <span className="js-select-control-choice">
                  {suggestion.place}
                </span>
                <span>{suggestion.category}</span>
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SearchSuggestions;
