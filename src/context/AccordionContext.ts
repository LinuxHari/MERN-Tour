import { createContext, useContext } from "react";

type AccordionContextProps = {
    onToggle: (index: number) => void
    activeAccordions: number[]
}

export const AccordionContext = createContext<AccordionContextProps | null>(null)

export const useAccordionContext = () => {
    const accordionContext = useContext(AccordionContext)

    if(!accordionContext)
        throw new Error("Accordion context must be used within provider")
    return accordionContext
}