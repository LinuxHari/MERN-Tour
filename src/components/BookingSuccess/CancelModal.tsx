import { ModalProps } from "../../type";
import Button from "../Shared/Button/Button";
import Modal from "../Shared/Modal/Modal"

type CancelModalProps = {
    paid: number;
    refundable: number;
} & ModalProps

const CancelModal = ({ showModal, onClose, onConfirm }: CancelModalProps) => {
  return (
    <Modal show={showModal} onClose={onClose}>
    <Modal.Header>
      <Modal.Title>Cancel booking</Modal.Title>
    </Modal.Header>
    <Modal.Content>
      <p></p>
    </Modal.Content>
    <Modal.Footer className="d-flex">
      <Modal.Close className="mr-5 px-4">Close</Modal.Close>
      <Button type="button" buttonType="primary" className="mx-3" onClick={onConfirm}>Cancel booking</Button>
    </Modal.Footer>
  </Modal>
  )
}

export default CancelModal