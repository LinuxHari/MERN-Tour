import {ModalProps} from "../../../type";
import Button from "../../Shared/Button/Button";
import Modal from "../../Shared/Modal/Modal";

type CancelModalProps = Omit<ModalProps, "onConfirm"> & {
  onConfirm: (bookingId: string) => void;
  bookingId: string;
};

const CancelModal = ({showModal, onClose, onConfirm, bookingId}: CancelModalProps) => {
  return (
    <Modal show={showModal} onClose={onClose}>
      <Modal.Header>
        <Modal.Title>Confirm Cancelation</Modal.Title>
      </Modal.Header>

      <Modal.Content>
        <p>
          Are you sure you want to cancel the booking <span className="fw-600">{bookingId}</span>?
        </p>
      </Modal.Content>

      <Modal.Footer className="d-flex justify-content-center">
        <Modal.Close className="mr-5 px-4">Close</Modal.Close>
        <Button className="py-2 px-5" buttonType="primary" onClick={() => onConfirm(bookingId)} showIcon={false}>
          Confirm
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default CancelModal;
