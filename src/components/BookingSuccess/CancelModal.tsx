import {ModalProps} from "../../type";
import Button from "../Shared/Button/Button";
import Modal from "../Shared/Modal/Modal";

type CancelModalProps = {
  paid: number;
  refundable: number;
} & ModalProps;

const CancelModal = ({showModal, onClose, onConfirm, paid, refundable}: CancelModalProps) => {
  return (
    <Modal show={showModal} onClose={onClose}>
      <Modal.Header>
        <Modal.Title>Cancel booking</Modal.Title>
      </Modal.Header>
      <Modal.Content>
        <p className="fw-500 text-18">Do you want to cancel booking?</p>
        <p className="d-flex justify-content-between">
          Paid : <span className="fw-600">${paid}</span>
        </p>
        <p className="d-flex justify-content-between">
          Refundable amount : <span className="fw-600">${refundable}</span>
        </p>
      </Modal.Content>
      <Modal.Footer className="d-flex">
        <Modal.Close className="mr-5 px-4">No</Modal.Close>
        <Button type="button" buttonType="primary" className="mx-3" onClick={onConfirm}>
          Yes
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default CancelModal;
