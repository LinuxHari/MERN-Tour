import useCurrencyHandler from "../../../hooks/Others/useCurrencyHandler";

type PriceProps = {
  price: number;
};

const Price = ({price}: PriceProps) => {
  const {formatPriceWithCode} = useCurrencyHandler();

  return <span>{formatPriceWithCode(price)}</span>;
};

export default Price;
