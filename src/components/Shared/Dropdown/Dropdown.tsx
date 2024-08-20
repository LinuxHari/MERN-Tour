import { useState, ReactNode } from "react";
import { DropdownContext, useDropdownContext } from "../../../context/DropdownContext";

type DropdownProps = {
  className?: string;
  children: ReactNode;
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

const Dropdown = ({ className, children }: DropdownProps) => {
  const [showContent, setShowContent] = useState(false);

  const toggleContent = () => {
    setShowContent((prev) => !prev);
  };

  return (
    <DropdownContext.Provider value={{ showContent, toggleContent }}>
      <div className={`headerDropdown ${className}`}>
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
