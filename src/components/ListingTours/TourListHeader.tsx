import { useState } from "react";
import Select from "../Shared/Select/Select";

type SortProps =
  | "Recommended"
  | "Price: Low to High"
  | "Price: High to Low"
  | "Rating: Low to High"
  | "Rating: High to Low";

const TourListHeader = () => {
  const [selectedOption, setSelectedOption] =
    useState<SortProps>("Recommended");

  const sortOptions: SortProps[] = [
    "Recommended",
    "Price: High to Low",
    "Price: Low to High",
    "Rating: Low to High",
    "Rating: High to Low",
  ];

  const handleChange = (value: string) => {
    setSelectedOption(value as SortProps);
  };  

  return (
    <div className="row y-gap-5 justify-between mt-30 mt-lg-0">
      <div className="col-auto">
        <div>1362 results</div>
      </div>

      <div className="col-auto">
        <Select defaultValue={selectedOption} onChange={handleChange}>
          <Select.Button>Sort by: </Select.Button>
          <Select.Menu>
            {sortOptions.map((sortType) => (
              <Select.Option key={sortType} value={sortType}>{sortType}</Select.Option>
            ))}
          </Select.Menu>
        </Select>
      </div>
    </div>
  );
};

export default TourListHeader;
