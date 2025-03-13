const SearchSkeleton = () => {
  return (
    <div className="d-flex flex-column card-body js-select-control-choice mx-3 mb-0">
      <div
        className="skeleton-element mb-2"
        style={{width: "90%", height: "16px"}}
      />
      <div
        className="skeleton-element"
        style={{width: "70%", height: "16px"}}
      />
    </div>
  );
};

export default SearchSkeleton;
