import Select from "../Shared/Select/Select";

// type SortProps =
//   | "Recommended"
//   | "Price: Low to High"
//   | "Price: High to Low"
//   | "Rating: Low to High"
//   | "Rating: High to Low";

type TourListHeaderProps = {
  totalCount: number;
  sortType: string;
  setSortType: (type: string) => void;
};

const TourListHeader = ({totalCount, sortType, setSortType}: TourListHeaderProps) => {
  const sortOptions = [
    "Recommended",
    "Price: High to Low",
    "Price: Low to High",
    "Rating: Low to High",
    "Rating: High to Low",
  ];

  return (
    <div className="row y-gap-5 justify-between mt-30 mt-lg-0">
      <div className="col-auto">
        <div>{totalCount} results</div>
      </div>

      <div className="col-auto">
        <Select defaultValue={sortType} onChange={setSortType}>
          <Select.Button>Sort by: </Select.Button>
          <Select.Menu>
            {sortOptions.map((sortType) => (
              <Select.Option key={sortType} value={sortType}>
                {sortType}
              </Select.Option>
            ))}
          </Select.Menu>
        </Select>
      </div>
    </div>
  );
};

export default TourListHeader;
