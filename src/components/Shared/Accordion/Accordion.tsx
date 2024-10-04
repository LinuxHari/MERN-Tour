import {
  ReactNode,
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
    if(type === "single"){
      if(activeAccordions.includes(index))
        setActiveAccordions([])
      else
        setActiveAccordions([index])
    }
    else{
      if(activeAccordions.includes(index)){
        const updatedValue = activeAccordions.filter((activeIndex) => activeIndex !== index)
        setActiveAccordions(updatedValue) 
      } else {
        setActiveAccordions([...activeAccordions, index])
      }
    }
  };

  return (
   <AccordionContext.Provider value={{activeAccordions, onToggle: handleToggle}}>
     <div className={`accordion -simple-2 js-accordion ${className}`}>
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
    <div className={`accordion__button d-flex items-center justify-between ${className}`}>
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
    >
      {children}
    </div>
  );
};

Accordion.Item = AccordionItem;
Accordion.Button = AccordionButton;
Accordion.Content = AccordionContent;

export default Accordion;
