import { createContext, useContext } from 'react';

export const ModalContext = createContext<{ isOpen: boolean; onClose: () => void; onOpen: () => void } | null>(null);

export const useModalContext = () => {
    const modalContext = useContext(ModalContext);
    if (!modalContext) {
      throw new Error('Modal.Close must be used within a Modal');
    }
    return modalContext   
}