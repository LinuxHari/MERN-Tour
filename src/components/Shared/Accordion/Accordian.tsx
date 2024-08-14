import React, {
  ReactNode,
  cloneElement,
  isValidElement,
  useState,
} from "react";

type AccordionProps = {
  children: ReactNode;
};

type AccordionItemProps = {
  children: ReactNode;
  isActive?: boolean;
  onToggle?: () => void;
};

type AccordionButtonProps = {
  children: ReactNode;
  onToggle?: () => void;
};

type AccordionContentProps = {
  children: ReactNode;
  isActive?: boolean;
};

const Accordion = ({ children }: AccordionProps) => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const handleToggle = (index: number) => {
    setActiveIndex((prevIndex) => (prevIndex === index ? null : index));
  };

  return (
    <div className="accordion -simple-2 js-accordion">
      {React.Children.map(children, (child, index) => {
        if (isValidElement<AccordionItemProps>(child)) {
          return cloneElement(child, {
            isActive: activeIndex === index,
            onToggle: () => handleToggle(index),
          });
        }
        return child;
      })}
    </div>
  );
};

const AccordionItem = ({
  children,
  isActive = false,
  onToggle,
}: AccordionItemProps) => {
  return (
    <div className={`accordion__item js-accordion-item-active ${isActive ? "is-active" : ""}`}>
      {React.Children.map(children, (child) => {
        if (
          isValidElement<AccordionButtonProps | AccordionContentProps>(child)
        ) {
          return cloneElement(child, { isActive, onToggle });
        }
        return child;
      })}
    </div>
  );
};

const AccordionButton = ({ children, onToggle }: AccordionButtonProps) => {
  return (
    <div className="accordion__button d-flex items-center justify-between" onClick={onToggle}>
      {children}
      <div className="accordion__icon flex-center">
        <i className="icon-chevron-down"></i>
        <i className="icon-chevron-down"></i>
      </div>
    </div>
  );
};

const AccordionContent = ({
  children,
  isActive = false,
}: AccordionContentProps) => {
  return (
    <div
      className="accordion__content"
      style={{ display: isActive ? "block" : "none", maxHeight: "300px" }}
    >
      {children}
    </div>
  );
};

Accordion.Item = AccordionItem;
Accordion.Button = AccordionButton;
Accordion.Content = AccordionContent;

export default Accordion;
