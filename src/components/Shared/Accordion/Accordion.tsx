import {
  ReactNode,
  useEffect,
  useState,
} from "react";
import { AccordionContext, useAccordionContext } from "../../../context/AccordionContext";

type commonProps = {
  children: ReactNode,
  className?: string
}

type AccordionProps = commonProps & {
  type: "single" | "multiple"
};

type AccordionItemProps = commonProps & {
  index: number;
};

type AccordionButtonProps = commonProps & {
  isShowIcon?: boolean
};

const Accordion = ({ type, children, className = "" }: AccordionProps) => {

  const [activeAccordions, setActiveAccordions] = useState<number[]>([]);

  const handleToggle = (index: number) => {
    if (type === "single") {
      setActiveAccordions((prevState) =>
        prevState.includes(index) ? [] : [index]
      );
    } else {
      setActiveAccordions((prevState) =>
        prevState.includes(index)
          ? prevState.filter((activeIndex) => activeIndex !== index)
          : [...prevState, index]
      );
    }
  };

  useEffect(() => {
    
    
  },[])

  return (
   <AccordionContext.Provider value={{activeAccordions, onToggle: handleToggle}}>
     <div className={`accordion js-accordion ${className}`}>
     {children}
    </div>
   </AccordionContext.Provider>
  );
};

const AccordionItem = ({
  children,
  index,
  className = ""
}: AccordionItemProps) => {
  const {activeAccordions, onToggle} = useAccordionContext()
  
  const isActive = activeAccordions.includes(index)
  return (
    <div className={`accordion__item js-accordion-item-active ${isActive ? "is-active" : ""} ${className}`} onClick={() => onToggle(index)}>
      {children}
    </div>
  );
};

const AccordionButton = ({ children, isShowIcon = true, className="" }: AccordionButtonProps) => {
  return (
    <div className={`accordion__button d-flex justify-content-between ${className}`}>
      {children}
      {isShowIcon && <div className="accordion__icon flex-center">
        <i className="icon-chevron-down"></i>
        <i className="icon-chevron-down"></i>
      </div>}
    </div>
  );
};

const AccordionContent = ({
  children,
  index,
  className = ""
}: AccordionItemProps) => {
  const {activeAccordions} = useAccordionContext()
  const isActive = activeAccordions.includes(index)
  return (
    <div
      className={`accordion__content ${className}`}
      style={{ display: isActive ? "block" : "none", maxHeight: "300px" }}
      onClick={(e) => e.stopPropagation()}
    >
      {children}
    </div>
  );
};

Accordion.Item = AccordionItem;
Accordion.Button = AccordionButton;
Accordion.Content = AccordionContent;

export default Accordion;
