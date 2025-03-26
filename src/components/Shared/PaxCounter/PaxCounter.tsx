import {MIN_AGE} from "../../../config/tourConfig";
import {TourSchemaType} from "../../../schema/tourSchema";
import {PaxProps} from "../../../type";
import stringToTitle from "../../../utils/stringToTitle";

type PaxCounterProps = {
  pax: PaxProps;
  setPax: (type: keyof PaxProps, value: number) => void;
  price?: TourSchemaType["price"];
  className?: string;
};

const PaxCounter = ({pax, setPax, price, className = ""}: PaxCounterProps) => {
  const paxAgeMap: Record<keyof PaxProps, keyof typeof MIN_AGE> = {
    adults: "adult",
    teens: "teen",
    children: "child",
    infants: "infant",
  };
  const paxEntries = Object.entries(paxAgeMap) as [keyof PaxProps, keyof typeof MIN_AGE][];

  const paxData = paxEntries.map(([paxType, ageCategory], index) => ({
    paxType,
    ageCategory,
    paxCount: pax[paxType] || 0,
    paxPrice: price?.[ageCategory] ?? 0,
    minAge: MIN_AGE[ageCategory],
    maxAge: index > 0 ? MIN_AGE[paxEntries[index - 1][1]] - 1 : "+",
  }));

  return (
    <div className={`pax__counter d-flex flex-column w-100 ${className}`}>
      {paxData.map(({paxType, paxCount, paxPrice, minAge, maxAge}) => (
        <div className="mb-2" key={paxType}>
          <div className="d-flex items-center justify-between gap-1">
            <div className="text-14">
              {stringToTitle(paxType)} ({minAge}
              {typeof maxAge === "number" ? ` - ${maxAge}` : "+"}) &nbsp;
              {paxPrice > 0 ? (
                <span className="fw-500">${(paxPrice * paxCount).toFixed(2)}</span>
              ) : price ? (
                <span className="text-10 text-light-2 mb-0">&nbsp;(No charge)</span>
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
