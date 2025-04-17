import {useEffect} from "react";
import {useFormContext} from "react-hook-form";
import isEqual from "lodash/isEqual";
import usePaxHandler from "../../../hooks/Tours/usePaxHandler";
import Dropdown from "../../Shared/Dropdown/Dropdown";
import PaxCounter from "../../Shared/PaxCounter/PaxCounter";
import getAgeFilteredPax from "../../../utils/getAgeFilteredPax";
import useAfterEffect from "../../../hooks/Shared/useAfterEffect";

type SearchPaxProps = {
  minAge?: number;
};

const SearchPax = ({minAge}: SearchPaxProps) => {
  const defaultPax = {
    adults: 1,
    teens: 0,
    children: 0,
    infants: 0,
  };

  const {setValue, getValues} = useFormContext();
  const {currentPax, setPax, total, setFullPax} = usePaxHandler(defaultPax);

  useEffect(() => {
    setValue("pax", currentPax);
  }, [currentPax]);

  useAfterEffect(() => {
    if (minAge) {
      const pax = getAgeFilteredPax(minAge, currentPax);

      const formPax = getValues("pax");

      if (!isEqual(formPax, pax)) {
        setFullPax(pax);
        setValue("pax", pax);
      }
    }
  }, [minAge, currentPax]);

  return (
    <Dropdown className="pax__count d-flex flex-column">
      <Dropdown.Toggle className="searchFormItem__button">
        <div className="searchFormItem__icon size-50 rounded-12 border-1 flex-center">
          <i className="text-20 icon-person m-0" />
        </div>
        <div className="searchFormItem__content">
          <h5>Passengers</h5>
          <p className="js-select-control-chosen">
            <span translate="no">{total}&nbsp;</span>People
          </p>
        </div>
      </Dropdown.Toggle>
      <Dropdown.Content className="searchFormItemDropdown__container absolute top-100 start-50 translate-middle-x z-5">
        <PaxCounter pax={currentPax} minAge={minAge} setPax={setPax} className="px-20 py-20" />
      </Dropdown.Content>
    </Dropdown>
  );
};

export default SearchPax;
