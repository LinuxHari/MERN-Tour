import Accordion from "../shared/Accordion/Accordian";

const PriceFilter = () => {
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
                    <span className="">Price:</span>
                    <span className="fw-500 js-lower">11,200</span>
                    <span> - </span>
                    <span className="fw-500 js-upper">15,000</span>
                  </div>

                  <div className="fw-500">Filter</div>
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
