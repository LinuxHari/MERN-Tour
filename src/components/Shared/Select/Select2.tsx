import React, {useEffect} from "react";
import {Select2Context, useSelect2Context} from "../../../context/Select2Context";
import useFocusHandler from "../../../hooks/Shared/useFocusHandler";

type CommonProps = {
  children: React.ReactNode;
  className?: string;
};

type SelectProps = CommonProps & {
  defaultValue?: string;
  onSelect: (value: string) => void;
  onContentShowing?: () => void;
};

type OptionProps = CommonProps & {
  value: string;
};

const Select2 = ({defaultValue, onSelect, onContentShowing, children, className = ""}: SelectProps) => {
  const {focusRef, showContent, setShowContent} = useFocusHandler();

  const handleSelect = (value: string) => {
    onSelect(value);
    setShowContent(false);
  };

  const toggleDropdown = () => {
    setShowContent(!showContent);
    if (!showContent && onContentShowing) {
      onContentShowing();
    }
  };

  useEffect(() => {
    if (defaultValue) {
      onSelect(defaultValue);
    }
  }, [defaultValue]);

  return (
    <Select2Context.Provider value={{defaultValue, onSelect: handleSelect, toggleDropdown, showContent}}>
      <div className={`searchFormItem js-select-control js-form-dd ${className}`} ref={focusRef}>
        {children}
      </div>
    </Select2Context.Provider>
  );
};

const Button = ({children, className = ""}: CommonProps) => {
  const {toggleDropdown} = useSelect2Context();

  return (
    <button
      className={`searchFormItem__button ${className}`}
      data-x-click="location"
      onClick={toggleDropdown}
      type="button"
    >
      {children}
    </button>
  );
};

const Menu = ({children, className = ""}: CommonProps) => {
  const {showContent} = useSelect2Context();

  return (
    <div
      className={`searchFormItemDropdown -location ${className} ${showContent ? "is-active" : ""}`}
      data-x="location"
      data-x-toggle="is-active"
    >
      <div className="searchFormItemDropdown__container">
        <div className="searchFormItemDropdown__list sroll-bar-1">{children}</div>
      </div>
    </div>
  );
};

const Option = ({value, children, className = ""}: OptionProps) => {
  const {onSelect} = useSelect2Context();

  return (
    <div className="searchFormItemDropdown__item">
      <button className={`js-select-control-button ${className}`} type="button" onClick={() => onSelect(value)}>
        {children}
      </button>
    </div>
  );
};

Select2.Button = Button;
Select2.Menu = Menu;
Select2.Option = Option;

export default Select2;
