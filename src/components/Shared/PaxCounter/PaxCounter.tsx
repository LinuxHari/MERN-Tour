import {MIN_AGE} from "../../../config/tourConfig";
import {TourSchemaType} from "../../../schema/tourSchema";
import {PaxProps} from "../../../type";
import stringToTitle from "../../../utils/stringToTitle";

type PaxCounterProps = {
  pax: PaxProps;
  setPax: (type: string, value: number) => void;
  price?: TourSchemaType["price"];
  className?: string;
};

const PaxCounter = ({pax, setPax, price, className = ""}: PaxCounterProps) => {
  const paxAgeMap: Record<string, keyof typeof MIN_AGE> = {
    adults: "adult",
    children: "child",
    infants: "infant",
    teens: "teen",
  };

  return (
    <div className={`pax__counter d-flex flex-column w-100 ${className}`}>
      {Object.entries(pax).map(
        ([key, value], index) =>
          (Boolean(value) || !price || price[paxAgeMap[key]]) && (
            <div className="mb-2" key={index}>
              <div className="d-flex items-center justify-between gap-1">
                <div className="text-14">
                  {stringToTitle(key)} (
                  {MIN_AGE[paxAgeMap[key]] ? MIN_AGE[paxAgeMap[key]] - 1 : MIN_AGE[paxAgeMap[key]]}
                  +)&nbsp;
                  {price?.[paxAgeMap[key]] && (
                    <span className="fw-500">
                      ${((price?.[paxAgeMap[key]] || 0) * (pax[key as keyof typeof pax] as number)).toFixed(2)}
                    </span>
                  )}
                </div>
                <div className="d-flex items-center js-counter">
                  <button
                    className="button size-30 border-1 rounded-full js-down"
                    type="button"
                    onClick={() => setPax(key, value - 1)}
                  >
                    <i className="icon-minus text-10" />
                  </button>

                  <div className="flex-center ml-10 mr-10">
                    <div className="text-14 size-20 js-count">{value}</div>
                  </div>

                  <button
                    className="button size-30 border-1 rounded-full js-up"
                    type="button"
                    onClick={() => setPax(key, value + 1)}
                  >
                    <i className="icon-plus text-10" />
                  </button>
                </div>
              </div>
            </div>
          ),
      )}
    </div>
  );
};

export default PaxCounter;
