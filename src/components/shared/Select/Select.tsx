import React, { useState, Children, cloneElement, ReactNode } from "react";

type SelectProps<T> = {
  children: ReactNode;
  defaultValue?: T;
  onChange?: (value: T) => void;
};

type ButtonProps = {
  selectedValue?: string;
  toggleDropdown?: () => void;
  isOpen?: boolean;
  children?: ReactNode;
};

type MenuProps<T> = {
  children: ReactNode;
  isOpen?: boolean;
  selectOption?: (value: T) => void;
};

type OptionProps<T> = {
  value: T;
  children: ReactNode;
  selectOption?: (value: T) => void;
};

const Select = <T,>({ children, defaultValue, onChange }: SelectProps<T>) => {
  const [selectedValue, setSelectedValue] = useState<T>(defaultValue as T);
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const toggleDropdown = () => setIsOpen(!isOpen);

  const selectOption = (value: T) => {
    setSelectedValue(value);
    setIsOpen(false);
    if (onChange) {
      onChange(value);
    }
  };

  return (
    <div className="dropdown -type-2 js-dropdown js-form-dd is-active">
      {Children.map(children, (child) => {
        if (React.isValidElement(child)) {
          return cloneElement(child, {
            ...(child.type === Button
              ? { selectedValue, toggleDropdown, isOpen }
              : {}),
            ...(child.type === Menu ? { isOpen, selectOption } : {}),
          });
        }
        return null;
      })}
    </div>
  );
};

const Button = ({
  selectedValue,
  toggleDropdown,
  children,
  isOpen,
}: ButtonProps) => (
  <div className="dropdown__button js-button" onClick={toggleDropdown}>
    {children && <span>{children}</span>}
    <span className="js-title">{selectedValue}</span>
    <i
      className={`icon-chevron-down ${isOpen ? "rotate-180" : "rotate-0"}`}
    ></i>
  </div>
);

const Menu = <T,>({ children, isOpen, selectOption }: MenuProps<T>) => {
  return isOpen ? (
    <div className="dropdown__menu js-menu-items">
      {Children.map(children, (child) => {
        if (React.isValidElement(child)) {
          return cloneElement(child, {
            ...(child.type === Option ? { selectOption } : {}),
          });
        }
        return null;
      })}
    </div>
  ) : null;
};

const Option = <T,>({ value, children, selectOption }: OptionProps<T>) => (
  <div
    className="dropdown__item"
    onClick={() => {
      selectOption && selectOption(value);
    }}
  >
    {children}
  </div>
);

Select.Button = Button;
Select.Menu = Menu;
Select.Option = Option;

export default Select;
