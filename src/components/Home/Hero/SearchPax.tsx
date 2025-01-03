import {useEffect} from "react";
import {useFormContext} from "react-hook-form";
import usePaxHandler from "../../../hooks/usePaxHandler";
import Dropdown from "../../Shared/Dropdown/Dropdown";
import PaxCounter from "../../Shared/PaxCounter/PaxCounter";

const SearchPax = () => {
  const defaultPax = {
    adults: 1,
    children: 0,
    teens: 0,
    infants: 0,
  };
  const {setValue} = useFormContext();
  const {currentPax, setPax, total} = usePaxHandler(defaultPax);

  useEffect(() => {
    setValue("pax", currentPax);
  }, [currentPax]);

  return (
    <Dropdown className="pax__count d-flex flex-column">
      <Dropdown.Toggle className="searchFormItem__button">
        <div className="searchFormItem__icon size-50 rounded-12 border-1 flex-center">
          <i className="text-20 icon-person m-0" />
        </div>
        <div className="searchFormItem__content">
          <h5>Passengers</h5>
          <p className="js-select-control-chosen">{total} People</p>
        </div>
      </Dropdown.Toggle>
      <Dropdown.Content className="searchFormItemDropdown__container absolute top-100 start-50 translate-middle-x z-5">
        <PaxCounter pax={currentPax} setPax={setPax} className="px-20 py-20" />
      </Dropdown.Content>
    </Dropdown>
  );
};

export default SearchPax;
