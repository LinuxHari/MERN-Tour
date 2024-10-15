import { MIN_AGE } from "../../../config/tourConfig"
import { PaxProps } from "../../../type";
import stringToTitle from "../../../utils/stringToTitle";

type PaxCounterProps = {
    pax: PaxProps;
    setPax: (type: string, value: number) => void;
    price?: number;
  };

const PaxCounter = ({ pax, setPax, price }: PaxCounterProps) => {
  const paxAgeMap:Record<string, keyof typeof MIN_AGE> = {adults: "adult", children: "child", infants: "infant", teens: "teen"}
  return (
    <div className="pax__counter d-flex flex-column w-100">
    {Object.entries(pax).map(([key, value]) => (
        <div className="mb-2">
          <div className="d-flex items-center justify-between">
             <div className="text-14">
              {stringToTitle(key)} ({MIN_AGE[paxAgeMap[key]] ? MIN_AGE[paxAgeMap[key]] - 1 : MIN_AGE[paxAgeMap[key]]}+)&nbsp;
              {
              price && <span className="fw-500">${(price * (pax[key as keyof typeof pax] as number)).toFixed(2)}</span>
            }
             </div>
            <div className="d-flex items-center js-counter">
              <button className="button size-30 border-1 rounded-full js-down" type="button" onClick={() => setPax(key, value - 1)}>
                <i className="icon-minus text-10"></i>
              </button>

              <div className="flex-center ml-10 mr-10">
                <div className="text-14 size-20 js-count">{value}</div>
              </div>

              <button className="button size-30 border-1 rounded-full js-up" type="button" onClick={() => setPax(key, value + 1)}>
                <i className="icon-plus text-10"></i>
              </button>
            </div>
          </div>
        </div>
        ))}
    </div>
  )
}

export default PaxCounter