import { useState, ReactNode } from "react";
import { SelectContext, useSelectContext } from "../../../context/SelectContext";




type SelectProps = {
  children: ReactNode;
  defaultValue?: string | number;
  onChange?: (value: string | number) => void;
};

type ButtonProps = {
  children?: ReactNode;
};

type OptionProps = {
  value: string | number;
  children: ReactNode;
};

const Select = ({ children, defaultValue, onChange }: SelectProps) => {
  const [selectedValue, setSelectedValue] = useState<string | number>(defaultValue || "");
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const toggleDropdown = () => setIsOpen((prev) => !prev);

  const selectOption = (value: string | number) => {
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
      <div className="dropdown -type-2 js-dropdown js-form-dd is-active">
        {children}
      </div>
    </SelectContext.Provider>
  );
};


const Button = ({ children }: ButtonProps) => {
  const { selectedValue, toggleDropdown, isOpen } = useSelectContext();

  return (
    <div className="dropdown__button js-button" onClick={toggleDropdown}>
      {children && <span>{children}</span>}
      <span className="js-title">{selectedValue}</span>
      <i
        className={`icon-chevron-down ${isOpen ? "rotate-180" : "rotate-0"}`}
      ></i>
    </div>
  );
};

const Menu = ({ children }: ButtonProps) => {
  const { isOpen } = useSelectContext();

  return isOpen ? (
    <div className="dropdown__menu js-menu-items">
      {children}
    </div>
  ) : null;
};

const Option = ({ value, children }: OptionProps) => {
  const { selectOption } = useSelectContext();

  return (
    <div
      className="dropdown__item"
      onClick={() => selectOption(value)}
    >
      {children}
    </div>
  );
};

Select.Button = Button;
Select.Menu = Menu;
Select.Option = Option;

export default Select;
