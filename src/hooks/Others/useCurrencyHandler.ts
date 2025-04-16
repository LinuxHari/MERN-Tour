import {useCallback} from "react";
import toast from "react-hot-toast";
import {useSelector, useDispatch} from "react-redux";
import {setCurrency, setExchangeRate} from "../../redux/slices/currencySlice";
import {useLazyGetExchangeRateQuery} from "../../redux/api/otherApi";
import {RootState} from "../../redux/store";
import useLocalStorage from "../Shared/useLocalStorage";

const useCurrencyHandler = () => {
  const dispatch = useDispatch();
  const [storedCurrency, setStoredCurrency] = useLocalStorage("currency");
  const [getExchangeRate] = useLazyGetExchangeRateQuery();

  const currencyState = useSelector((state: RootState) => state.currency);
  const {exchangeRate, currencyCode, currency} = currencyState;

  const getCurrencyExchangeRate = useCallback(
    async (currency: string) => {
      const {data, error} = await getExchangeRate(currency);

      if (!data || error) {
        return toast.error("Failed to fetch exchange rate", {id: "Exchange-error"});
      }

      dispatch(setExchangeRate(data));
    },
    [dispatch],
  );

  const setCurrencyValue = useCallback((newCurrency: string) => {
    setStoredCurrency(newCurrency);
    dispatch(setCurrency(newCurrency));
  }, []);

  const formatPrice = useCallback(
    (price: number) => {
      return parseFloat((price * exchangeRate).toFixed(2));
    },
    [exchangeRate],
  );

  const formatPriceInt = useCallback(
    (price: number) => {
      return Math.ceil(price * exchangeRate);
    },
    [exchangeRate],
  );

  const formatPriceWithCode = useCallback(
    (price: number) => {
      return `${currencyCode}${(price * exchangeRate).toFixed(2)}`;
    },
    [currencyCode, exchangeRate],
  );

  const formatPrices = useCallback(
    (prices: number[]) => {
      return prices.map(formatPrice);
    },
    [formatPrice],
  );

  return {
    exchangeRate,
    currencyCode,
    currency,
    getExchangeRate: getCurrencyExchangeRate,
    setCurrency: setCurrencyValue,
    formatPrice,
    formatPriceInt,
    formatPriceWithCode,
    formatPrices,
    storedCurrency,
  };
};

export default useCurrencyHandler;
