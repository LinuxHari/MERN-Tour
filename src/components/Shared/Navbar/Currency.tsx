import {CURRENCIES} from "../../../data";
import useLocalStorage from "../../../hooks/Shared/useLocalStorage";
import useCurrencyHandler from "../../../hooks/Others/useCurrencyHandler";
import useAfterEffect from "../../../hooks/Shared/useAfterEffect";
import Select from "../Select/Select";

type CurrencyProps = {
  isMobile?: boolean;
};

const Currency = ({isMobile = false}: CurrencyProps) => {
  const currencies = CURRENCIES.map(({value}) => value);
  const [storedCurrency, setCurrencyValue] = useLocalStorage("currency", currencies[0]);
  const {getExchangeRate} = useCurrencyHandler();

  useAfterEffect(() => {
    getExchangeRate(storedCurrency as string);
  }, [storedCurrency]);

  return (
    <Select className="js-form-dd" defaultValue={storedCurrency as string} onChange={setCurrencyValue}>
      <Select.Button className={`headerDropdown__button ${isMobile ? "px-2" : ""}`} hideSelectedValue>
        {storedCurrency as string}
      </Select.Button>
      <Select.Menu className="min-w-50">
        <div className="headerDropdown">
          <div className="d-flex flex-column align-items-center justify-content-center">
            {currencies.map((currency, index) => (
              <Select.Option key={index} value={currency} className="px-0 py-2 w-100 text-center">
                {currency}
              </Select.Option>
            ))}
          </div>
        </div>
      </Select.Menu>
    </Select>
  );
};

export default Currency;
