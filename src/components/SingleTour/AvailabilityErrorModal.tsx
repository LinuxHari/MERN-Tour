import {ModalProps} from "../../type";
import Button from "../Shared/Button/Button";
import Modal from "../Shared/Modal/Modal";

const AvailabilityErrorModal = ({showModal, onClose, onConfirm}: ModalProps) => {
  return (
    <Modal show={showModal} onClose={onClose}>
      <Modal.Header>
        <Modal.Title>Tour not available</Modal.Title>
      </Modal.Header>
      <Modal.Content className="px-2 text-center">
        <p>
          This tour is not available currently, <span className="d-inline d-md-block">please select another tour.</span>
        </p>
      </Modal.Content>
      <Modal.Footer className="d-flex justify-content-end">
        <Button type="button" buttonType="primary" onClick={onConfirm} className="py-2">
          Go to home
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default AvailabilityErrorModal;
