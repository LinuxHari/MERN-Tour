import React, {useEffect} from "react";
import {ModalContext, useModalContext} from "../../../context/ModalContext";
import useFocusHandler from "../../../hooks/useFocusHandler";
import Button from "../Button/Button";
import Portal from "../Portal/Portal";

type ModalProps = {
  children: React.ReactNode;
  className?: string;
};

type ModalContainerProps = ModalProps & {
  show?: boolean;
  onClose?: () => void;
};

const Trigger = ({children, className = ""}: ModalProps) => {
  const {onOpen, isOpen} = useModalContext();

  return (
    <Button
      type="button"
      buttonType="primary"
      className={`${isOpen ? "d-none" : "d-inline-block"} ${className}`}
      onClick={onOpen}
      showIcon={false}
    >
      {children}
    </Button>
  );
};

const Modal = ({children, className = "", show, onClose: onModalClose}: ModalContainerProps) => {
  const {showContent, setShowContent, focusRef} = useFocusHandler();

  const onOpen = () => setShowContent(true);
  const onClose = () => setShowContent(false);

  useEffect(() => {
    if (show) onOpen();
    else onClose();
  }, [show]);

  useEffect(() => {
    if (!showContent && onModalClose) onModalClose();
  }, [showContent]);

  return (
    <ModalContext.Provider value={{isOpen: showContent, onClose, onOpen}}>
      {React.Children.map(children, (child) => {
        if (React.isValidElement(child)) {
          if (child.type === Trigger) {
            return React.cloneElement(child);
          }
        }
      })}
      {showContent && (
        <Portal id="modal">
          <div tabIndex={-1} role="dialog" className="modal-overlay">
            <div className="modal-body" role="document">
              <div className={`${className}`} ref={focusRef}>
                {children}
              </div>
            </div>
          </div>
        </Portal>
      )}
    </ModalContext.Provider>
  );
};

const Header = ({children, className = ""}: ModalProps) => (
  <div className={`border-1-bottom py-2 ${className}`}>{children}</div>
);

const Title = ({children, className = ""}: ModalProps) => (
  <h5 className={`${className}`}>{children}</h5>
);

const Content = ({children, className = ""}: ModalProps) => (
  <div className={`border-1-bottom py-2 ${className}`}>{children}</div>
);

const Footer = ({children, className = ""}: ModalProps) => (
  <div className={` py-2 ${className}`}>{children}</div>
);

const Close = ({children, className = ""}: ModalProps) => {
  const {onClose} = useModalContext();

  return (
    <Button
      type="button"
      buttonType="secondary"
      className={`px-5 py-2  ${className}`}
      onClick={onClose}
      showIcon={false}
    >
      {children}
    </Button>
  );
};

Modal.Trigger = Trigger;
Modal.Header = Header;
Modal.Title = Title;
Modal.Content = Content;
Modal.Footer = Footer;
Modal.Close = Close;

export default Modal;
