import { FiltersProps } from "../../type";
import Accordion from "../Shared/Accordion/Accordion";

const PriceFilter = ({minPrice, maxPrice}: FiltersProps) => {
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
                <div className="px-5">
                  <div className="js-slider"></div>
                </div>

                <div className="d-flex justify-between mt-20">
                  <div className="">
                    <span className="">Price: </span>
                    <span className="fw-500 js-lower">{minPrice}</span>
                    <span> - </span>
                    <span className="fw-500 js-upper">{maxPrice}</span>
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
