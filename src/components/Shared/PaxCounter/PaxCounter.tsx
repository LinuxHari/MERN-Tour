import {TourSchemaType} from "../../../schema/tourSchema";
import {PaxProps} from "../../../type";
import paxCounterUtils from "../../../utils/paxCounterUtils";
import stringToTitle from "../../../utils/stringToTitle";
import Price from "../Price/Price";

// Conditional props: require minAge when price is passed
type WithPrice = {
  pax: PaxProps;
  setPax: (type: keyof PaxProps, value: number) => void;
  price: TourSchemaType["price"];
  minAge: number;
  className?: string;
};

type WithoutPrice = {
  pax: PaxProps;
  setPax: (type: keyof PaxProps, value: number) => void;
  price?: undefined;
  minAge?: never;
  className?: string;
};

type PaxCounterProps = WithPrice | WithoutPrice;

const PaxCounter = ({pax, setPax, price, className = "", minAge}: PaxCounterProps) => {
  const paxData = paxCounterUtils({pax, price, minAge});

  return (
    <div className={`pax__counter d-flex flex-column w-100 ${className}`}>
      {paxData.map(({paxType, paxCount, paxPrice, minAge, maxAge}) => (
        <div className="mb-2" key={paxType}>
          <div className="d-flex items-center justify-between gap-1">
            <div className="text-14">
              {stringToTitle(paxType)} ({minAge}
              {typeof maxAge === "number" ? ` - ${maxAge}` : "+"}) &nbsp;
              {paxPrice > 0 ? (
                <span className="fw-500">
                  <Price price={paxPrice * paxCount} />
                </span>
              ) : null}
            </div>
            <div className="d-flex items-center js-counter">
              <button
                className="button size-30 border-1 rounded-full js-down"
                type="button"
                onClick={() => paxCount > 0 && setPax(paxType, paxCount - 1)}
                disabled={paxCount === 0}
              >
                <i className="icon-minus text-10" />
              </button>

              <div className="flex-center ml-10 mr-10">
                <div className="text-14 size-20 js-count">{paxCount}</div>
              </div>

              <button
                className="button size-30 border-1 rounded-full js-up"
                type="button"
                onClick={() => setPax(paxType, paxCount + 1)}
              >
                <i className="icon-plus text-10" />
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default PaxCounter;
