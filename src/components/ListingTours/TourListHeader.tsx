import {SortTypes} from "../../type";
import Select from "../Shared/Select/Select";

type TourListHeaderProps = {
  totalCount: number;
  sortType: SortTypes;
  setSortType: (type: SortTypes) => void;
};

const TourListHeader = ({totalCount, sortType, setSortType}: TourListHeaderProps) => {
  const sortOptions: Record<string, SortTypes> = {
    Recommended: "RCM",
    "Price: High to Low": "PHL",
    "Price: Low to High": "PLH",
    "Rating: Low to High": "RLH",
    "Rating: High to Low": "RHL",
  };

  const currentSortType =
    Object.entries(sortOptions).find(([_, value]) => value === sortType)?.[0] ?? sortOptions.Recommended;

  return (
    <div className="row y-gap-5 justify-between mt-30 mt-lg-0">
      <div className="col-auto">
        <div>{totalCount} results</div>
      </div>

      <div className="col-auto">
        <Select
          defaultValue={currentSortType}
          onChange={(selectedSortType: string) => setSortType(sortOptions[selectedSortType])}
        >
          <Select.Button>Sort by: </Select.Button>
          <Select.Menu>
            {Object.keys(sortOptions).map((sortType) => (
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
