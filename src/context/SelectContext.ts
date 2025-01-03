import {createContext, useContext} from "react";

type SelectContextProps = {
  selectedValue: string;
  showContent: boolean;
  toggleDropdown: () => void;
  selectOption: (value: string) => void;
};

export const SelectContext = createContext<SelectContextProps | undefined>(undefined);

export const useSelectContext = (): SelectContextProps => {
  const context = useContext(SelectContext);

  if (!context) {
    throw new Error("Select compound components must be used within a Select");
  }

  return context;
};
