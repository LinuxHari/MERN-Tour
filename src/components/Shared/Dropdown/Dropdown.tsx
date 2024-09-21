import { ReactNode, useEffect } from "react";
import { DropdownContext, useDropdownContext } from "../../../context/DropdownContext";
import useFocusHandler from "../../../hooks/useFocusHandler";

type DropdownProps = {
  className?: string;
  children: ReactNode;
  close?: string;
};

type ContentProps = {
  children: ReactNode;
  className?: string;
  dataClick?: string;
};

type ToggleProps = {
  className?: string;
  children: ReactNode;
  dataClick?: string;
};

const Dropdown = ({ className, children, close }: DropdownProps) => {
  const {showContent, setShowContent, focusRef} = useFocusHandler();

  const toggleContent = () => {
    setShowContent(!showContent);
  };


  console.log(close);
      

  useEffect(() => {
    if(close && showContent) {

      setShowContent(false)
    }
  },[close])

  return (
    <DropdownContext.Provider value={{ showContent, toggleContent }}>
      <div className={`headerDropdown ${className}`} ref={focusRef}>
        {children}
      </div>
    </DropdownContext.Provider>
  );
};

const Toggle = ({ children, className = "", dataClick }: ToggleProps) => {
  const { toggleContent } = useDropdownContext();

  return (
    <div
      className={`headerDropdown__button ${className}`}
      data-x-click={dataClick}
      onClick={toggleContent}
    >
      {children}
    </div>
  );
};

const Content = ({ children, className = "", dataClick }: ContentProps) => {
  const { showContent } = useDropdownContext();

  return (
    <div
      className={`headerDropdown__content ${className} ${showContent ? "is-active" : ""}`}
      data-x={dataClick}
      data-x-toggle="is-active"
    >
      {children}
    </div>
  );
};

Dropdown.Toggle = Toggle;
Dropdown.Content = Content;

export default Dropdown;
