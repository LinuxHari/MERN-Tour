import { useState, ReactNode } from "react";
import { SelectContext, useSelectContext } from "../../../context/SelectContext";

type SelectProps = {
  children: ReactNode;
  defaultValue: string;
  onChange: (value: string) => void;
  className?: string
};

type ButtonProps = {
  children?: ReactNode;
  className?: string
};

type OptionProps = ButtonProps & {
  value: string;
};

const Select = ({ children, defaultValue, onChange, className = "" }: SelectProps) => {
  const [selectedValue, setSelectedValue] = useState<string>(defaultValue || "");
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const toggleDropdown = () => setIsOpen((prev) => !prev);

  const selectOption = (value: string) => {
    setSelectedValue(value);
    setIsOpen(false);
    if (onChange) {
      onChange(value);
    }
  };

  return (
    <SelectContext.Provider
      value={{ selectedValue, isOpen, toggleDropdown, selectOption }}
    >
      <div className={`dropdown -type-2 js-dropdown js-form-dd is-active ${className}`}>
        {children}
      </div>
    </SelectContext.Provider>
  );
};


const Button = ({ children, className = "" }: ButtonProps) => {
  const { selectedValue, toggleDropdown, isOpen } = useSelectContext();

  return (
    <button type="button" className={`dropdown__button js-button ${className}`} onClick={toggleDropdown}>
      <span className="js-title">{children && <>{children}</>}{selectedValue}</span>
      <i
        className={`icon-chevron-down ${isOpen ? "rotate-180" : "rotate-0"}`}
      ></i>
    </button>
  );
};

const Menu = ({ children, className }: ButtonProps) => {
  const { isOpen } = useSelectContext();

  return isOpen ? (
    <div className={`dropdown__menu js-menu-items ${className}`}>
      {children}
    </div>
  ) : null;
};

const Option = ({ value, children }: OptionProps) => {
  const { selectOption } = useSelectContext();

  return (
    <option
      className="dropdown__item"
      onClick={() => selectOption(value)}
    >
      {children}
    </option>
  );
};

Select.Button = Button;
Select.Menu = Menu;
Select.Option = Option;

export default Select;
