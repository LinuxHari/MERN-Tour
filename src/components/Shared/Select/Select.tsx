import {useState, ReactNode} from "react";
import {SelectContext, useSelectContext} from "../../../context/SelectContext";
import useFocusHandler from "../../../hooks/Shared/useFocusHandler";

type SelectProps = {
  children: ReactNode;
  defaultValue: string;
  onChange: (value: string) => void;
  className?: string;
};

type ButtonProps = {
  children?: ReactNode;
  className?: string;
  hideSelectedValue?: true;
};

type OptionProps = ButtonProps & {
  value: string;
};

const Select = ({children, defaultValue, onChange, className = ""}: SelectProps) => {
  const [selectedValue, setSelectedValue] = useState<string>(defaultValue || "");
  const {focusRef, showContent, setShowContent} = useFocusHandler();

  const toggleDropdown = () => setShowContent((prev) => !prev);

  const selectOption = (value: string) => {
    setSelectedValue(value);
    setShowContent(false);
    if (onChange) {
      onChange(value);
    }
  };

  return (
    <SelectContext.Provider value={{selectedValue, showContent, toggleDropdown, selectOption}}>
      <div
        className={`dropdown -type-2 js-dropdown js-form-dd ${showContent ? "is-active" : ""} ${className}`}
        ref={focusRef}
      >
        {children}
      </div>
    </SelectContext.Provider>
  );
};

const Button = ({children, className = "", hideSelectedValue}: ButtonProps) => {
  const {selectedValue, toggleDropdown, showContent} = useSelectContext();

  return (
    <button type="button" className={`dropdown__button js-button ${className}`} onClick={toggleDropdown}>
      <span className="js-title">
        {children && <>{children}</>}
        {!hideSelectedValue && selectedValue}
      </span>
      <i className={`icon-chevron-down ml-2 ${showContent ? "rotate-180" : "rotate-0"}`} />
    </button>
  );
};

const Menu = ({children, className = ""}: ButtonProps) => {
  const {showContent} = useSelectContext();

  return showContent ? <div className={`dropdown__menu js-menu-items ${className}`}>{children}</div> : null;
};

const Option = ({value, children, className = ""}: OptionProps) => {
  const {selectOption} = useSelectContext();

  return (
    <option
      className={`dropdown__item ${className}`}
      onClick={(e) => {
        e.stopPropagation();
        selectOption(value);
      }}
    >
      {children}
    </option>
  );
};

Select.Button = Button;
Select.Menu = Menu;
Select.Option = Option;

export default Select;
