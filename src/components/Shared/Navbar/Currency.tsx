import { CURRENCIES } from "../../../data";
import Dropdown from "../Dropdown/Dropdown";

const Currency = () => {
  return (
    <Dropdown className="js-form-dd">
      <Dropdown.Toggle dataClick="header-currency">
        USD
        <i className="icon-chevron-down text-18"></i>
      </Dropdown.Toggle>

      <Dropdown.Content dataClick="header-currency">
        <div className="headerDropdown">
          <div className="headerDropdown__container">
            {CURRENCIES.map((currency, index) => (
              <div key={index} className="headerDropdown__item">
                <button className="">{currency}</button>
              </div>
            ))}
          </div>
        </div>
      </Dropdown.Content>
    </Dropdown>
  );
};

export default Currency;
