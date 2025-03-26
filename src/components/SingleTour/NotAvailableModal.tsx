import {ModalProps} from "../../type";
import Modal from "../Shared/Modal/Modal";

const NotAvailableModal = ({showModal, onClose}: Omit<ModalProps, "onConfirm">) => {
  return (
    <Modal show={showModal} onClose={onClose}>
      <Modal.Header>
        <Modal.Title>Tour not available</Modal.Title>
      </Modal.Header>
      <Modal.Content className="px-2 text-center">
        <p>
          This tour is not available for selected date,{" "}
          <span className="d-inline d-md-block">please select different date.</span>
        </p>
      </Modal.Content>
      <Modal.Footer className="d-flex justify-content-end">
        <Modal.Close>Close</Modal.Close>
      </Modal.Footer>
    </Modal>
  );
};

export default NotAvailableModal;
