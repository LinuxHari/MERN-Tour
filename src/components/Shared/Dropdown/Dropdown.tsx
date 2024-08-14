import React, { useState, ReactNode, cloneElement, isValidElement } from "react";

type DropdownProps = {
  className?: string;
  children: ReactNode;
};

type ContentProps = {
  children: ReactNode;
  showContent?: boolean;
  className?: string
  dataClick?: string
};

type ToggleProps = {
  onClick?: () => void;
  className?: string
  children: ReactNode;
  dataClick?: string
};

const Dropdown = ({ className, children }: DropdownProps) => {
  const [showContent, setShowContent] = useState(false);

  const toggleContent = () => {
    setShowContent(!showContent);
  };

  return (
    <div className={`headerDropdown ${className}`}>
      {React.Children.map(children, (child) => {
        if (isValidElement(child)) {
          if (child.type === Dropdown.Toggle) {
            return cloneElement(child, {
              onClick: toggleContent,
            } as ToggleProps);
          } else if (child.type === Dropdown.Content) {
            return cloneElement(child, { showContent } as ContentProps);
          }
        }
        return child;
      })}
    </div>
  );
};

const Toggle = ({ onClick, children, className = "", dataClick }: ToggleProps) => {
  return (
    <div
      className={`headerDropdown__button ${className}`}
      data-x-click={dataClick}
      onClick={onClick}
    >
      {children}
    </div>
  );
};

const Content = ({ children, showContent, className = "", dataClick }: ContentProps) => {
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