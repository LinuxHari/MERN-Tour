import {CURRENCIES} from "../../../data";
import Select from "../Select/Select";
import useLocalStorage from "../../../hooks/useLocalStorage";

const Currency = () => {
  const currencies = CURRENCIES.map(({value}) => value);
  const [storedCurrency, setCurrencyValue] = useLocalStorage("currency", currencies[0]);

  return (
    <Select
      className="js-form-dd"
      defaultValue={storedCurrency as string}
      onChange={setCurrencyValue}
    >
      <Select.Button className="headerDropdown__button" hideSelectedValue>
        {storedCurrency as string}
      </Select.Button>
      <Select.Menu>
        <div className="headerDropdown">
          <div className="headerDropdown__container">
            {currencies.map((currency, index) => (
              <Select.Option key={index} value={currency} className="headerDropdown__item">
                <button className="">{currency}</button>
              </Select.Option>
            ))}
          </div>
        </div>
      </Select.Menu>
    </Select>
  );
};

export default Currency;
