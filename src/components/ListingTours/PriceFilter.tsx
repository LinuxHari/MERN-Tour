import Accordion from "../Shared/Accordion/Accordion";
import PriceRangeSlider from "rc-slider";
import "rc-slider/assets/index.css";
import { useEffect, useState } from "react";

type PriceFilterProps = {
  setPriceRange: (minPrice: number, maxPrice?: number) => void;
  priceRange: { minPrice?: number; maxPrice?: number };
};

const PriceFilter = ({ priceRange, setPriceRange }: PriceFilterProps) => {
  const defaultRange = { minPrice: 5, maxPrice: 2000 };
  const [currentPriceRange, setCurrentRange] = useState([5, 1500]);
  const [currentMinPrice, currentMaxPrice] = currentPriceRange;
  const handleRange = (range: number[]) =>
    range[1] === defaultRange.maxPrice ? setPriceRange(range[0]) : setPriceRange(range[0], range[1]);

  useEffect(() => {
    const { minPrice, maxPrice } = priceRange;
    if (minPrice && maxPrice) setCurrentRange([minPrice, maxPrice]);
  }, [priceRange]);

  return (
    <div className="sidebar__item">
      <Accordion type="single">
        <Accordion.Item index={0}>
          <Accordion.Button>
            <h5 className="text-18 fw-500">Filter Price</h5>
          </Accordion.Button>

          <Accordion.Content index={0}>
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
                    <span className="fw-500 js-upper">
                      ${currentMaxPrice === defaultRange.maxPrice ? currentMaxPrice + "+" : currentMaxPrice}
                    </span>
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
