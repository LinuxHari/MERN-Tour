import Accordion from "../Shared/Accordion/Accordion";
import PriceRangeSlider from "rc-slider";
import "rc-slider/assets/index.css";
import { useState } from "react";

type PriceFilterProps = {
  setPriceRange: (minPrice: number, maxPrice: number) => void;
};

const PriceFilter = ({ setPriceRange }: PriceFilterProps) => {
  const defaultRange = { minPrice: 5, maxPrice: 10000 };

  const [currentPriceRange, setCurrentRange] = useState([defaultRange.minPrice, defaultRange.maxPrice]);

  const [currentMinPrice, currentMaxPrice] = currentPriceRange;

  const handleRange = (range: number[]) => setPriceRange(range[0], range[1])

  return (
    <div className="sidebar__item">
      <Accordion>
        <Accordion.Item>
          <Accordion.Button>
            <h5 className="text-18 fw-500">Filter Price</h5>
          </Accordion.Button>

          <Accordion.Content>
            <div className="pt-15">
              <div className="js-price-rangeSlider">
                <div className="mx-3">
                <PriceRangeSlider
                  min={defaultRange.minPrice}
                  value={currentPriceRange}
                  max={defaultRange.maxPrice}
                  range={{ minCount: 2, maxCount: 2 }}
                  onChange={(range) => setCurrentRange(range as number[])}
                  onChangeComplete={(range) => handleRange(range as number[])}
                />
                </div>
                <div className="d-flex justify-between mt-20">
                  <div className="">
                    <span className="">Price: </span>
                    <span className="fw-500 js-lower">${currentMinPrice}</span>
                    <span> - </span>
                    <span className="fw-500 js-upper">${currentMaxPrice}</span>
                  </div>
                </div>
              </div>
            </div>
          </Accordion.Content>
        </Accordion.Item>
      </Accordion>
    </div>
  );
};

export default PriceFilter;
