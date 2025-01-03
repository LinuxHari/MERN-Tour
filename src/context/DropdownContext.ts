import {createContext, useContext} from "react";

type DropdownContextProps = {
  showContent: boolean;
  toggleContent: () => void;
};

export const DropdownContext = createContext<DropdownContextProps | undefined>(undefined);

export const useDropdownContext = () => {
  const context = useContext(DropdownContext);

  if (!context) {
    throw new Error("Dropdown compound components must be used within a Dropdown");
  }

  return context;
};
