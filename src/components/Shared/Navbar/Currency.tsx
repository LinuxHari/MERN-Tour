import {CURRENCIES} from "../../../data";
import Select from "../Select/Select";
import useLocalStorage from "../../../hooks/useLocalStorage";

type CurrencyProps = {
  isMobile?: boolean;
};

const Currency = ({isMobile = false}: CurrencyProps) => {
  const currencies = CURRENCIES.map(({value}) => value);
  const [storedCurrency, setCurrencyValue] = useLocalStorage(
    "currency",
    currencies[0],
  );

  return (
    <Select
      className="js-form-dd"
      defaultValue={storedCurrency as string}
      onChange={setCurrencyValue}
    >
      <Select.Button
        className={`headerDropdown__button ${isMobile ? "px-2" : ""}`}
        hideSelectedValue
      >
        {storedCurrency as string}
      </Select.Button>
      <Select.Menu className="min-w-50">
        <div className="headerDropdown">
          <div className="d-flex flex-column items-center justify-center">
            {currencies.map((currency, index) => (
              <Select.Option key={index} value={currency} className="px-0 py-2">
                <span>{currency}</span>
              </Select.Option>
            ))}
          </div>
        </div>
      </Select.Menu>
    </Select>
  );
};

export default Currency;
