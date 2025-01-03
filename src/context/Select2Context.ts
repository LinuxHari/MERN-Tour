import {createContext, useContext} from "react";

type Select2ContextProps = {
  defaultValue?: string;
  onSelect: (value: string) => void;
  toggleDropdown: () => void;
  showContent: boolean;
};

export const Select2Context = createContext<Select2ContextProps | undefined>(undefined);

export const useSelect2Context = (): Select2ContextProps => {
  const context = useContext(Select2Context);

  if (!context) {
    throw new Error("Select compound components must be used within a Select");
  }

  return context;
};
